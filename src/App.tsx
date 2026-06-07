import { Desktop } from "./components/Desktop";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.root}>
      <div className={styles.bg}>
        <div className={styles.bgBlob1} />
        <div className={styles.bgBlob2} />
        <div className={styles.bgBlob3} />
      </div>
      <div className={styles.screen}>
        <Desktop />
      </div>
    </div>
  );
}
