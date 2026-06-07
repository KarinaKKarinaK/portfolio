import { useRef, useCallback } from "react";

export function useDrag(initialPos: { x: number; y: number }) {
  const pos = useRef(initialPos);
  const elRef = useRef<HTMLDivElement>(null);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const startX = e.clientX - pos.current.x;
    const startY = e.clientY - pos.current.y;

    const onMove = (ev: MouseEvent) => {
      pos.current = { x: ev.clientX - startX, y: ev.clientY - startY };
      if (elRef.current) {
        elRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
    };

    const onUp = () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  }, []);

  return { elRef, onMouseDown };
}
