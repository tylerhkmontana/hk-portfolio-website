import styles from './AboutMe.module.scss';
import competencies from '@/data/competencies.data';
export default function AboutMe({ col_start, col_end, row_start, row_end }) {
  const grid_template = {
    gridColumnStart: col_start,
    gridColumnEnd: col_end,
    gridRowStart: row_start,
    gridRowEnd: row_end,
  };
  return (
    <div className={styles.about_me} style={grid_template}>
      <div className={styles.profile_info_container}>
        <div className={styles.profile_img}>
          <img src="./profile.png" alt="profile image" />
        </div>
        <div className={styles.profile_info}>
          <p className={styles.availability}>
            <span className={styles.on}></span>Available To Work
          </p>
          <h3>HYUNBIN KIM</h3>
          <h6>Full Stack Engineer</h6>
          <br />
          <p>
            A dedicated problem solver offering creative solutions to technical
            challenges.
          </p>
          <br />
          <div className={styles.linkedin_github}>
            <a href="https://www.linkedin.com/in/hyunbinkim/" target="_blank">
              <img
                src="./icons/view-my-linkedin-profile.webp"
                alt="linkedin badge"
              />
            </a>
            <a href="https://github.com/tylerhkmontana" target="_blank">
              <img src="./icons/github.png" alt="github badge" />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.profile_detail}>
        <span>
          <img src="./icons/school.png" alt="school icon" />
          Queens College, CUNY
        </span>
        <span>
          <img src="./icons/education.png" alt="education icon" />
          Computer Science
        </span>
        <span>
          <img src="./icons/location.png" alt="location icon" />
          Queens, New York
        </span>
        <span>
          <img src="./icons/email.png" alt="email icon" />
          tylerhkmontana@gmail.com
        </span>
        <span>
          <img src="./icons/language.png" alt="language icon" />
          English · Korean
        </span>
      </div>

      <div className={styles.competencies}>
        {competencies.map((comp, i) => (
          <span key={i}>{comp}</span>
        ))}
      </div>
    </div>
  );
}
