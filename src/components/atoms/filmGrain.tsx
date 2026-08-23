"use client";

import { useEffect, useRef } from "react";

export default function FilmGrain() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const scale = 0.35;
        const fps = 18;
        let frameId: number;
        let lastTime = 0;

        function resize() {
            const activeCanvas = canvasRef.current;
            if (!activeCanvas) return;

            activeCanvas.width = Math.ceil(window.innerWidth * scale);
            activeCanvas.height = Math.ceil(window.innerHeight * scale);
        }

        function draw(time: number) {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            
            if (time - lastTime > 1000 / fps) {
                const imageData = ctx.createImageData(canvas.width, canvas.height);
                const data = imageData.data;

                for (let i = 0; i < data.length; i += 4) {
                    const noise = Math.random() * 255;

                    data[i] = 105 + noise * 0.22;
                    data[i + 1] = 70 + noise * 0.14;
                    data[i + 2] = 165 + noise * 0.3;
                    data[i + 3] = 58;
                }

                ctx.putImageData(imageData, 0, 0);
                lastTime = time;
            }

            frameId = requestAnimationFrame(draw);
        }

        resize();
        frameId = requestAnimationFrame(draw);

        window.addEventListener("resize", resize);

        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return <canvas ref={canvasRef} className="film-grain" />;
}