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
  // Research papers (top-right area)
  { id: "personas",   imageSrc: "/icons/painting-personas.png",  label: "AI Personas",        left: "43%", top: "12%", window: "projects" as const },
  { id: "hft",        imageSrc: "/icons/painting-hft.png",       label: "HFT Research",       left: "59%", top: "8%",  window: "projects" as const },
  { id: "schnapsen",  imageSrc: "/icons/painting-schnapsen.png", label: "Hybrid Intelligence",left: "74%", top: "8%",  window: "projects" as const },
  // Chemical/Gallery icons
  { id: "chem1",  imageSrc: "/icons/chemical1.png", label: "Microscopy I",   left: "36%", top: "43%", window: "about" as const },
  { id: "chem2",  imageSrc: "/icons/chemical2.png", label: "Microscopy II",  left: "50%", top: "38%", window: "about" as const },
  { id: "chem3",  imageSrc: "/icons/chemical3.png", label: "Microscopy III", left: "64%", top: "43%", window: "about" as const },
  { id: "chem4",  imageSrc: "/icons/chemical4.png", label: "Microscopy IV",  left: "78%", top: "38%", window: "about" as const },
  { id: "chem5",  imageSrc: "/icons/chemical5.png", label: "Microscopy V",   left: "36%", top: "64%", window: "about" as const },
  { id: "chem6",  imageSrc: "/icons/chemical6.png", label: "Microscopy VI",  left: "50%", top: "60%", window: "about" as const },
  { id: "chem7",  imageSrc: "/icons/chemical7.png", label: "Microscopy VII", left: "64%", top: "64%", window: "about" as const },
  { id: "chem8",  imageSrc: "/icons/chemical8.png", label: "Microscopy VIII",left: "78%", top: "60%", window: "about" as const },
  // Math tree
  { id: "math",   imageSrc: "/icons/math-tree.png", label: "Math & AI",      left: "43%", top: "68%", window: "about" as const },
];

export function Desktop() {
  const [openWindow, setOpenWindow] = useState<OpenWindow>(null);

  const openProjects = () => setOpenWindow("projects");
  const openAbout   = () => setOpenWindow("about");
  const closeWindow = () => setOpenWindow(null);

  return (
    <div className={styles.desktop}>
      <div className={styles.wallpaper}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.blob3} />
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
      {openWindow === "about"    && <AboutWindow    onClose={closeWindow} />}
    </div>
  );
}
