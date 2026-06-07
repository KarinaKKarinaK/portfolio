import styles from "./Dock.module.css";

interface Props {
  onOpenProjects: () => void;
  onOpenAbout: () => void;
}

export function Dock({ onOpenProjects, onOpenAbout }: Props) {
  return (
    <div className={styles.dock}>
      <button className={styles.itemBtn} title="Projects" onClick={onOpenProjects}>
        <img src="/icons/finder.png" alt="Finder" className={styles.item} />
      </button>
      <button className={styles.itemBtn} title="About" onClick={onOpenAbout}>
        <img src="/icons/notes.webp" alt="Notes" className={styles.item} />
      </button>
      <a
        href="mailto:karina.kalicka@orq.ai"
        title="Email"
        className={styles.itemBtn}
      >
        <img src="/icons/mail.png" alt="Mail" className={styles.item} />
      </a>
    </div>
  );
}
