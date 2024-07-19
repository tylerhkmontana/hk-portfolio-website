'use client'

import { useEffect } from 'react';
import styles from './Clock.module.scss';
export default function Clock({ col_start, col_end, row_start, row_end }) {
  useEffect(() => {
    var inc = 1000;

    clock();

    function clock() {
      const date = new Date();

      const hours = ((date.getHours() + 11) % 12) + 1;
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      const hour = hours * 30;
      const minute = minutes * 6;
      const second = seconds * 6;

      document.querySelector('#hour').style.transform = `rotate(${hour}deg)`;
      document.querySelector(
        '#minute'
      ).style.transform = `rotate(${minute}deg)`;
      document.querySelector(
        '#second'
      ).style.transform = `rotate(${second}deg)`;
    }

    const ticking = setInterval(clock, inc);

    return clearInterval(ticking)
  }, []);

  const grid_template = {
    gridColumnStart: col_start,
    gridColumnEnd: col_end,
    gridRowStart: row_start,
    gridRowEnd: row_end,
  };
  return (
    <div className={styles.clock_container} style={grid_template}>
    <div className={styles.clock}>
      <div className={styles.wrap}>
        <span id="hour" className={styles.hour}></span>
        <span id="minute" className={styles.minute}></span>
        <span id="second" className={styles.second}></span>
        <span className={styles.dot}></span>
      </div>
    </div>
    </div>
  );
}
