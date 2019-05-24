import React from 'react';
import css from './style.css';

type TProps = {
  width: string;
  height: string;
  type: 'inline' | 'block';
};

const Spinner: React.FC<TProps> = ({ width, height }) => (
  <div style={{ width, height }} className={css.spinner}>
    <div className={css.spinner_inner} />
  </div>
);

const Pure = React.memo(Spinner);

export { Pure as Spinner };
