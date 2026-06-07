import React from "react";
import styles from "./DesktopIcon.module.css";

interface Props {
  imageSrc?: string;
  emoji?: string;
  label: string;
  color?: string;
  onClick: () => void;
  style?: React.CSSProperties;
}

export function DesktopIcon({ imageSrc, emoji, label, color, onClick, style }: Props) {
  return (
    <div className={styles.icon} style={style} onClick={onClick}>
      {imageSrc ? (
        <img src={imageSrc} alt={label} className={styles.img} />
      ) : (
        <div className={styles.box} style={{ background: color }}>
          {emoji}
        </div>
      )}
      <span className={styles.label}>{label}</span>
    </div>
  );
}
