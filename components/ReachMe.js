import styles from './ReachMe.module.scss';

export default function ReachMe({ col_start, col_end, row_start, row_end }) {
  const grid_template = {
    gridColumnStart: col_start,
    gridColumnEnd: col_end,
    gridRowStart: row_start,
    gridRowEnd: row_end,
  };
  return (
    <div className={styles.reach_me} style={grid_template}>
      <h2>Reach Me</h2>
    </div>
  );
}
