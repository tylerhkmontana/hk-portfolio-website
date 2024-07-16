import styles from './Resume.module.scss';

export default function Resume({ col_start, col_end, row_start, row_end }) {
  const grid_template = {
    gridColumnStart: col_start,
    gridColumnEnd: col_end,
    gridRowStart: row_start,
    gridRowEnd: row_end,
  };
  return (
    <div className={styles.resume} style={grid_template}>
      <img src="./icons/download.png" alt="download icon" />
      <a href="./resume.pdf" target="_blank">
        <h2>Resume</h2>
      </a>
    </div>
  );
}
