import React from 'react';
import ArrowUp from '../icons/ArrowUp';
import styles from './Controls.module.scss';

const Controls = () => {
  return (
    <button
      onClick={() => window.scrollTo(0, 0)}
      className={styles['controls']}
      title='Scroll to top'
    >
      <ArrowUp />
    </button>
  );
};

export default Controls;
