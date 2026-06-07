import styles from "./Dock.module.css";

const dockItems = [
  { src: "/icons/finder.png", label: "Finder", href: "#" },
  { src: "/icons/notes.webp", label: "Notes", href: "#" },
  { src: "/icons/mail.png", label: "Email", href: "mailto:karina.kalicka@orq.ai" },
];

export function Dock() {
  return (
    <div className={styles.dock}>
      {dockItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target={item.href.startsWith("mailto") ? undefined : undefined}
          title={item.label}
          className={styles.itemWrap}
        >
          <img src={item.src} alt={item.label} className={styles.item} />
        </a>
      ))}
    </div>
  );
}
