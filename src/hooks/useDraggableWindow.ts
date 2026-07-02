"use client";

import { useEffect, useRef, useState } from "react";

type Position = {
  x: number;
  y: number;
};

// 
function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function useDraggableWindow(isOpen: boolean) {
  const windowRef = useRef<HTMLDivElement>(null);
  const dragOffsetRef = useRef({ x: 0, y: 0 });

  const [position, setPosition] = useState<Position | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const frame = requestAnimationFrame(() => {
      const windowElement = windowRef.current;
      if (!windowElement) return;

      const rect = windowElement.getBoundingClientRect();

      setPosition({
        x: Math.max(0, (window.innerWidth - rect.width) / 2),
        y: Math.max(0, (window.innerHeight - rect.height) / 2),
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [isOpen]);

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (!position) return;

    event.currentTarget.setPointerCapture(event.pointerId);

    dragOffsetRef.current = {
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    };

    setIsDragging(true);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!isDragging || !windowRef.current) return;

    const rect = windowRef.current.getBoundingClientRect();

    const maxX = Math.max(0, window.innerWidth - rect.width);
    const maxY = Math.max(0, window.innerHeight - rect.height);

    setPosition({
      x: clamp(event.clientX - dragOffsetRef.current.x, 0, maxX),
      y: clamp(event.clientY - dragOffsetRef.current.y, 0, maxY),
    });
  }

  function handlePointerUp(event: React.PointerEvent<HTMLDivElement>) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    setIsDragging(false);
  }

  return {
    windowRef,
    position,
    isDragging,
    windowProps: {
      ref: windowRef,
      style: {
        left: position?.x ?? 0,
        top: position?.y ?? 0,
        visibility: position ? "visible" : "hidden",
      } as React.CSSProperties,
    },
    dragHandleProps: {
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerUp,
      onPointerCancel: handlePointerUp,
    },
  };
}