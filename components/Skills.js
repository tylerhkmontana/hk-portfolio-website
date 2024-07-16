import { first_skills, second_skills } from '@/data/skills.data';
import styles from './Skills.module.scss';

export default function Skills({ col_start, col_end, row_start, row_end }) {
  const grid_template = {
    gridColumnStart: col_start,
    gridColumnEnd: col_end,
    gridRowStart: row_start,
    gridRowEnd: row_end,
  };
  return (
    <div className={styles.skills} style={grid_template}>
      <div className={styles.slider_to_left}>
        <div className={styles.slide_track}>
          {first_skills.map((skill, i) => (
            <a key={i} className={styles.slide} href={skill.url}>
              <img src={`/icons/${skill.fileName}`} alt={skill.alt} />
            </a>
          ))}
          {first_skills.map((skill, i) => (
            <a key={i} className={styles.slide} href={skill.url}>
              <img src={`/icons/${skill.fileName}`} alt={skill.alt} />
            </a>
          ))}
        </div>
      </div>

      <div className={styles.slider_to_right}>
        <div className={styles.slide_track}>
          {second_skills.map((skill, i) => (
            <a key={i} className={styles.slide} href={skill.url}>
              <img src={`/icons/${skill.fileName}`} alt={skill.alt} />
            </a>
          ))}
          {second_skills.map((skill, i) => (
            <a key={i} className={styles.slide} href={skill.url}>
              <img src={`/icons/${skill.fileName}`} alt={skill.alt} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
