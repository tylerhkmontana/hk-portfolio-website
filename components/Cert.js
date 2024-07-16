import styles from './Cert.module.scss';

export default function Cert({ col_start, col_end, row_start, row_end }) {
  const grid_template = {
    gridColumnStart: col_start,
    gridColumnEnd: col_end,
    gridRowStart: row_start,
    gridRowEnd: row_end,
  };
  return (
    <div className={styles.cert} style={grid_template}>
      <img src="./icons/ibm.png" />
      <a href="./certificate.pdf" target="_blank">
        <h2>Full Stack Software Developer Certificate</h2>
      </a>
    </div>
  );
}
