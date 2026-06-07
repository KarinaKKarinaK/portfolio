import React from "react";
import { useDrag } from "../hooks/useDrag";
import styles from "./Window.module.css";

interface WindowProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  initialX: number;
  initialY: number;
  width: number;
  height: number;
}

export function Window({ title, onClose, children, initialX, initialY, width, height }: WindowProps) {
  const { elRef, onMouseDown } = useDrag({ x: initialX, y: initialY });

  return (
    <div
      ref={elRef}
      className={styles.window}
      style={{
        width,
        height,
        transform: `translate(${initialX}px, ${initialY}px)`,
        top: 0,
        left: 0,
      }}
    >
      <div className={styles.titleBar} onMouseDown={onMouseDown}>
        <div className={styles.trafficLights}>
          <div className={`${styles.light} ${styles.red}`} onClick={onClose} />
          <div className={`${styles.light} ${styles.yellow}`} />
          <div className={`${styles.light} ${styles.green}`} />
        </div>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}
