import { useState } from "react";
import { Window } from "../Window";
import styles from "./AboutWindow.module.css";

interface Props {
  onClose: () => void;
}

type SectionId = "karina" | "research" | "skills" | "email" | "linkedin" | "github";

const aboutSections: { id: SectionId; icon: string; label: string; group: string }[] = [
  { id: "karina", icon: "👋", label: "I'm Karina", group: "About me" },
  { id: "research", icon: "🔬", label: "Research", group: "About me" },
  { id: "skills", icon: "⚡", label: "Skills", group: "About me" },
  { id: "email", icon: "📬", label: "Email", group: "Contact" },
  { id: "linkedin", icon: "💼", label: "LinkedIn", group: "Contact" },
  { id: "github", icon: "🐙", label: "GitHub", group: "Contact" },
];

function DetailContent({ id }: { id: SectionId }) {
  switch (id) {
    case "karina":
      return (
        <>
          <div className={styles.detailTitle}>Hello, I'm Karina</div>
          <div className={styles.detailText}>
            I'm an AI Researcher and Engineer passionate about building intelligent systems at the intersection of human-computer interaction and machine learning.
          </div>
          <div className={styles.detailText}>
            Currently pursuing my MSc in Artificial Intelligence at VU Amsterdam, while working as an AI Engineer at Orq.ai, building tools that help teams orchestrate, evaluate, and deploy LLMs at scale.
          </div>
          <div className={styles.detailText}>
            My work spans from HCI research on AI personas and user trust, to applied ML in finance and game-playing agents.
          </div>
        </>
      );
    case "research":
      return (
        <>
          <div className={styles.detailTitle}>Research Interests</div>
          <div className={styles.detailText}>My research sits at the crossroads of human-AI interaction and applied machine learning:</div>
          <div className={styles.skillList}>
            {["Human-AI Interaction", "AI Personas & Trust", "LLM Orchestration", "Hybrid Intelligence", "AI in Games", "ML for Finance"].map((r) => (
              <span key={r} className={styles.skill}>{r}</span>
            ))}
          </div>
          <div className={styles.detailText} style={{ marginTop: 16 }}>
            I investigate how users perceive and trust AI systems, and how we can design AI agents that collaborate effectively with humans.
          </div>
        </>
      );
    case "skills":
      return (
        <>
          <div className={styles.detailTitle}>Skills</div>
          <div className={styles.detailText}>Languages & Frameworks</div>
          <div className={styles.skillList}>
            {["Python", "TypeScript", "React", "PyTorch", "FastAPI", "Node.js"].map((s) => (
              <span key={s} className={styles.skill}>{s}</span>
            ))}
          </div>
          <div className={styles.detailText} style={{ marginTop: 14 }}>AI & ML</div>
          <div className={styles.skillList}>
            {["LLMs", "Prompt Engineering", "RAG", "Fine-tuning", "HCI Research", "A/B Testing"].map((s) => (
              <span key={s} className={styles.skill}>{s}</span>
            ))}
          </div>
          <div className={styles.detailText} style={{ marginTop: 14 }}>Tools</div>
          <div className={styles.skillList}>
            {["Git", "Docker", "Vercel", "Weights & Biases", "Jupyter"].map((s) => (
              <span key={s} className={styles.skill}>{s}</span>
            ))}
          </div>
        </>
      );
    case "email":
      return (
        <>
          <div className={styles.detailTitle}>Email</div>
          <div className={styles.contactRow}>
            <span className={styles.contactIcon}>📬</span>
            <a href="mailto:karina.kalicka@orq.ai" className={styles.link}>karina.kalicka@orq.ai</a>
          </div>
          <div className={styles.detailText}>Feel free to reach out for research collaborations, job opportunities, or just to say hello.</div>
        </>
      );
    case "linkedin":
      return (
        <>
          <div className={styles.detailTitle}>LinkedIn</div>
          <div className={styles.contactRow}>
            <span className={styles.contactIcon}>💼</span>
            <a href="https://linkedin.com/in/karina-kalicka" target="_blank" rel="noreferrer" className={styles.link}>linkedin.com/in/karina-kalicka</a>
          </div>
          <div className={styles.detailText}>Connect with me on LinkedIn to stay updated on my research and projects.</div>
        </>
      );
    case "github":
      return (
        <>
          <div className={styles.detailTitle}>GitHub</div>
          <div className={styles.contactRow}>
            <span className={styles.contactIcon}>🐙</span>
            <a href="https://github.com/karinakalicka" target="_blank" rel="noreferrer" className={styles.link}>github.com/karinakalicka</a>
          </div>
          <div className={styles.detailText}>Check out my open source work and research code on GitHub.</div>
        </>
      );
  }
}

export function AboutWindow({ onClose }: Props) {
  const [selected, setSelected] = useState<SectionId>("karina");
  const groups = Array.from(new Set(aboutSections.map((s) => s.group)));

  return (
    <Window title="About Karina" onClose={onClose} initialX={140} initialY={100} width={620} height={420}>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          {groups.map((group) => (
            <div key={group} className={styles.section}>
              <div className={styles.sectionLabel}>{group}</div>
              {aboutSections.filter((s) => s.group === group).map((item) => (
                <div
                  key={item.id}
                  className={`${styles.sidebarItem} ${selected === item.id ? styles.active : ""}`}
                  onClick={() => setSelected(item.id)}
                >
                  <span className={styles.icon}>{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className={styles.detail}>
          <DetailContent id={selected} />
        </div>
      </div>
    </Window>
  );
}
