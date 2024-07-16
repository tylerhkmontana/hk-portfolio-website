'use client';

import styles from './Projects.module.scss';
import projects from '@/data/projects.data';
import { useState } from 'react';

export default function Projects({ col_start, col_end, row_start, row_end }) {
  const [currProj, setCurrProj] = useState(projects[0]);

  const grid_template = {
    gridColumnStart: col_start,
    gridColumnEnd: col_end,
    gridRowStart: row_start,
    gridRowEnd: row_end,
  };

  const focused = {
    borderColor: 'white',
  };
  return (
    <div className={styles.projects} style={grid_template}>
      <div className={styles.contents}>
        <h2>Projects</h2>
        <div className={styles.showcase}>
          <div className={styles.project_title}>
            <img src={currProj.icon_url}/>
          <h3>{currProj.title}</h3>
          </div>
        </div>
      </div>
      <ul className={styles.projects_nav}>
        {projects.map((proj, i) => (
          <li
            key={i}
            style={proj.title === currProj.title ? focused : {}}
            onClick={() => setCurrProj(proj)}
          >
            {proj.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
