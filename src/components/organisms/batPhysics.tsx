"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";

const DEFAULT_BOX_SIZE = 300;
const SMALL_NOTEBOOK_BOX_SIZE = 250;

export default function BatPhysicsPrototype() {
  const sceneRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    const {
      Engine,
      Render,
      Runner,
      Bodies,
      Body,
      Events,
      Constraint,
      Composite,
      Mouse,
      MouseConstraint,
    } = Matter;

    const width = sceneRef.current.clientWidth || 600;
    const height = sceneRef.current.clientHeight || 520;
    const boxSize = window.matchMedia(
      "(min-width: 1024px) and (max-width: 1440px)"
    ).matches
      ? SMALL_NOTEBOOK_BOX_SIZE
      : DEFAULT_BOX_SIZE;
    const rootStyles = getComputedStyle(document.documentElement);
    const themeColor = (name: string, fallback: string) => {
      return rootStyles.getPropertyValue(name).trim() || fallback;
    };
    const squareFill = themeColor("--background-window-panel", "#24202a");
    const squareStroke = themeColor("--highlight-text", "#9b7ac8");
    const ropeStroke = themeColor("--border-muted", "rgba(255, 255, 255, 0.28)");

    const engine = Engine.create();

    engine.gravity.x = 0;
    engine.gravity.y = 1;
    engine.gravity.scale = 0.001;

    const leftAnchorPoint = {
      x: width / 2 - boxSize / 2,
      y: 0,
    };
    const rightAnchorPoint = {
      x: width / 2 + boxSize / 2,
      y: 0,
    };

    const squareCenter = {
      x: width / 2,
      y: height / 2,
    };

    const square = Bodies.rectangle(
      squareCenter.x,
      squareCenter.y,
      boxSize,
      boxSize,
      {
        label: "Bat placeholder",
        density: 0.001,
        frictionAir: 0.02,
        restitution: 0.2,
        render: {
          fillStyle: squareFill,
          strokeStyle: squareStroke,
          lineWidth: 2,
        },
      }
    );

    const leftRope = Constraint.create({
      label: "Left ceiling rope",
      pointA: leftAnchorPoint,
      bodyB: square,
      pointB: {
        x: -boxSize / 2,
        y: -boxSize / 2,
      },
      length: 350,
      stiffness: 0.9,
      damping: 0.04,
      render: {
        strokeStyle: ropeStroke,
        lineWidth: 2,
      },
    });
    const rightRope = Constraint.create({
      label: "Right ceiling rope",
      pointA: rightAnchorPoint,
      bodyB: square,
      pointB: {
        x: boxSize / 2,
        y: -boxSize / 2,
      },
      length: 350,
      stiffness: 0.9,
      damping: 0.04,
      render: {
        strokeStyle: ropeStroke,
        lineWidth: 2,
      },
    });

    const mouse = Mouse.create(sceneRef.current);

    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        damping: 0.05,
        render: {
          visible: false,
        },
      },
    });

    const minSquareCenterY = boxSize / 2 + 125;

    const limitDragTarget = () => {
      if (mouseConstraint.body !== square) return;

      const dragTarget = mouseConstraint.constraint.pointA;
      const grabOffset = mouseConstraint.constraint.pointB;

      if (!dragTarget || !grabOffset) return;

      dragTarget.y = Math.max(dragTarget.y, minSquareCenterY + grabOffset.y);
    };

    const keepSquareInside = () => {
      if (mouseConstraint.body !== square) return;

      if (square.position.y < minSquareCenterY) {
        Body.setPosition(square, {
          x: square.position.x,
          y: minSquareCenterY,
        });

        Body.setVelocity(square, {
          x: square.velocity.x * 0.4,
          y: 0,
        });

        Body.setAngularVelocity(square, square.angularVelocity * 0.5);
      }
    };

    Events.on(engine, "beforeUpdate", limitDragTarget);
    Events.on(engine, "afterUpdate", keepSquareInside);
    Composite.add(engine.world, [square, leftRope, rightRope, mouseConstraint]);

    const render = Render.create({
      element: sceneRef.current,
      engine,
      options: {
        width,
        height,
        background: "transparent",
        wireframes: false,
        pixelRatio: window.devicePixelRatio,
      },
    });

    render.mouse = mouse;

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    return () => {
      Events.off(engine, "beforeUpdate", limitDragTarget);
      Events.off(engine, "afterUpdate", keepSquareInside);

      Render.stop(render);
      Runner.stop(runner);
      Composite.clear(engine.world, false);
      Engine.clear(engine);

      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      className="relative h-full w-full cursor-grab"
      aria-label="Protótipo físico do morcego"
    />
  );
}
