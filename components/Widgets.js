'use client';

import styles from './Widgets.module.scss';
import WeatherUI from './WeatherUI';
import Clock from './Clock';

export default function Widgets({ col_start, col_end, row_start, row_end }) {
  const grid_template = {
    gridColumnStart: col_start,
    gridColumnEnd: col_end,
    gridRowStart: row_start,
    gridRowEnd: row_end,
  };
  return (
    <div className={styles.widgets} style={grid_template}>
      <div>
        <Clock />
      </div>
      <div>
        <WeatherUI />
      </div>
    </div>
  );
}
