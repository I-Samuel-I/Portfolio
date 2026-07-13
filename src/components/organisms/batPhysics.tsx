"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";

const BOX_SIZE = 300;

export default function BatPhysicsPrototype() {
  const sceneRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    const {
      Engine,
      Render,
      Runner,
      Bodies,
      Constraint,
      Composite,
      Mouse,
      MouseConstraint,
    } = Matter;

    const width = sceneRef.current.clientWidth || 600;
    const height = sceneRef.current.clientHeight || 520;

    const engine = Engine.create();

    engine.gravity.x = 0;
    engine.gravity.y = 1;
    engine.gravity.scale = 0.001;

    const leftAnchorPoint = {
      x: width / 2 - BOX_SIZE / 2,
      y: 100,
    };
    const rightAnchorPoint = {
      x: width / 2 + BOX_SIZE / 2,
      y: 100,
    };

    const square = Bodies.rectangle(
      width / 2,
      280,
      BOX_SIZE,
      BOX_SIZE,
      {
        label: "Bat placeholder",
        density: 0.001,
        frictionAir: 0.02,
        restitution: 0.2,
        render: {
          fillStyle: "#f8fafc",
          strokeStyle: "#a855f7",
          lineWidth: 2,
        },
      }
    );

    const leftRope = Constraint.create({
      label: "Left ceiling rope",
      pointA: leftAnchorPoint,
      bodyB: square,
      pointB: {
        x: -BOX_SIZE / 2,
        y: -BOX_SIZE / 2,
      },
      length: 250,
      stiffness: 0.9,
      damping: 0.04,
      render: {
        strokeStyle: "#e5e7eb",
        lineWidth: 2,
      },
    });
    const rightRope = Constraint.create({
      label: "Right ceiling rope",
      pointA: rightAnchorPoint,
      bodyB: square,
      pointB: {
        x: BOX_SIZE / 2,
        y: -BOX_SIZE / 2,
      },
      length: 250,
      stiffness: 0.9,
      damping: 0.04,
      render: {
        strokeStyle: "#e5e7eb",
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
      className="relative h-full min-h-130 w-full overflow-hidden cursor-grab"
      aria-label="Protótipo físico do morcego"
    />
  );
}