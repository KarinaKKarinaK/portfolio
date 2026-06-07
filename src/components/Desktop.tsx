import { useState } from "react";
import { MenuBar } from "./MenuBar";
import { ProfileWidget } from "./ProfileWidget";
import { DesktopIcon } from "./DesktopIcon";
import { Dock } from "./Dock";
import { ProjectsWindow } from "./windows/ProjectsWindow";
import { AboutWindow } from "./windows/AboutWindow";
import styles from "./Desktop.module.css";

type OpenWindow = "projects" | "about" | null;

const desktopIcons = [
  {
    id: "personas",
    imageSrc: "/icons/painting-personas.png",
    label: "AI Personas",
    left: "44%",
    top: "18%",
    window: "projects" as const,
  },
  {
    id: "hft",
    imageSrc: "/icons/painting-hft.png",
    label: "HFT Research",
    left: "62%",
    top: "14%",
    window: "projects" as const,
  },
  {
    id: "schnapsen",
    imageSrc: "/icons/painting-schnapsen.png",
    label: "Hybrid Intelligence",
    left: "54%",
    top: "44%",
    window: "projects" as const,
  },
];

export function Desktop() {
  const [openWindow, setOpenWindow] = useState<OpenWindow>(null);

  const openProjects = () => setOpenWindow("projects");
  const openAbout = () => setOpenWindow("about");
  const closeWindow = () => setOpenWindow(null);

  return (
    <div className={styles.desktop}>
      <div className={styles.wallpaper}>
        <div className={`${styles.blob} ${styles.blob1}`} />
        <div className={`${styles.blob} ${styles.blob2}`} />
        <div className={`${styles.blob} ${styles.blob3}`} />
      </div>

      <MenuBar onOpenProjects={openProjects} onOpenAbout={openAbout} />
      <ProfileWidget />

      {desktopIcons.map((icon) => (
        <DesktopIcon
          key={icon.id}
          imageSrc={icon.imageSrc}
          label={icon.label}
          onClick={icon.window === "projects" ? openProjects : openAbout}
          style={{ left: icon.left, top: icon.top }}
        />
      ))}

      <Dock onOpenProjects={openProjects} onOpenAbout={openAbout} />

      {openWindow === "projects" && <ProjectsWindow onClose={closeWindow} />}
      {openWindow === "about" && <AboutWindow onClose={closeWindow} />}
    </div>
  );
}
