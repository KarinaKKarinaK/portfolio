import { useState } from "react";
import { Window } from "../Window";
import { projects } from "../../data/projects";
import styles from "./ProjectsWindow.module.css";

interface Props {
  onClose: () => void;
}

export function ProjectsWindow({ onClose }: Props) {
  const [selected, setSelected] = useState(projects[0].id);
  const project = projects.find((p) => p.id === selected);

  return (
    <Window title="Projects" onClose={onClose} initialX={80} initialY={60} width={620} height={420}>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          {projects.map((p) => (
            <div
              key={p.id}
              className={`${styles.sidebarItem} ${selected === p.id ? styles.active : ""}`}
              onClick={() => setSelected(p.id)}
            >
              <div className={styles.dot} style={{ background: p.color }} />
              {p.name}
            </div>
          ))}
        </div>
        <div className={styles.detail}>
          {project ? (
            <>
              <div className={styles.detailYear}>{project.year}</div>
              <div className={styles.detailName}>{project.name}</div>
              <div className={styles.detailMeta}>{project.role} &middot; {project.venue}</div>
              <div className={styles.detailDesc}>{project.description}</div>
              <div className={styles.badge} style={{ background: project.color }}>{project.role}</div>
            </>
          ) : (
            <div className={styles.empty}>Select a project</div>
          )}
        </div>
      </div>
    </Window>
  );
}
