import styles from "./ProfileWidget.module.css";

export function ProfileWidget() {
  return (
    <div className={styles.widget}>
      <div className={styles.avatar}>KK</div>
      <div className={styles.name}>Karina, AI Researcher</div>
      <div className={styles.tagline}>
        Building intelligent systems at the intersection of HCI and ML.
      </div>
      <div className={styles.status}>
        <div className={styles.dot} />
        Available for work
      </div>
    </div>
  );
}
