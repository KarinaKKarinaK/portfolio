import styles from "./MenuBar.module.css";

interface Props {
  onOpenProjects: () => void;
  onOpenAbout: () => void;
}

export function MenuBar({ onOpenProjects, onOpenAbout }: Props) {
  return (
    <div className={styles.menubar}>
      <span className={styles.brand}>Karina Mac</span>
      <nav className={styles.nav}>
        <button className={styles.navLink} onClick={onOpenProjects}>Projects</button>
        <button className={styles.navLink}>Gallery</button>
        <button className={styles.navLink} onClick={onOpenAbout}>About</button>
        <button className={styles.navLink} onClick={onOpenAbout}>Contact</button>
      </nav>
    </div>
  );
}
