'use client';

import useScrollReveal from '../shared/useScrollReveal';
import SectionBackground from '../shared/SectionBackground';
import { skillGroups } from '../../lib/data';
import styles from './Skills.module.css';

export default function Skills() {
  const rootRef = useScrollReveal();

  return (
    <section id="skills" ref={rootRef} className={styles.section}>
      <SectionBackground src="/images/backgrounds/skills.png" overlay={0.3} />
      <div className={styles.inner}>
        <p className={styles.eyebrow} data-reveal>
          Capabilities
        </p>
        <h2 className={styles.heading} data-reveal>
          Technical skills.
        </h2>

        <div className={styles.groups}>
          {skillGroups.map((group) => (
            <div key={group.label} className={styles.group} data-reveal>
              <div className={styles.groupLabel}>{group.label}</div>
              <div className={styles.pillList}>
                {group.items.map((item) => (
                  <span key={item} className={styles.pill}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

