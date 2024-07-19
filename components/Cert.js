import styles from './Cert.module.scss';

export default function Cert({ col_start, col_end, row_start, row_end }) {
  const grid_template = {
    gridColumnStart: col_start,
    gridColumnEnd: col_end,
    gridRowStart: row_start,
    gridRowEnd: row_end,
  };
  return (
    <a className={styles.cert} style={grid_template} href="./certificate.pdf" target="_blank">
      <img src="./icons/ibm.png" />
        <h2>Full Stack Software Developer Certificate</h2>
    </a>
  );
}
