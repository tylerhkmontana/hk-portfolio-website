import styles from './Footer.module.scss';

export default function Footer({ col_start, col_end, row_start, row_end }) {
  const grid_template = {
    gridColumnStart: col_start,
    gridColumnEnd: col_end,
    gridRowStart: row_start,
    gridRowEnd: row_end,
  };
  return (
    <div className={styles.footer} style={grid_template}>
      <h3>&copy; 2024 Hyunbin Kim, All rights reserved.</h3>
    </div>
  );
}
