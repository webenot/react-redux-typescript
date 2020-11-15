// Core
import React, { FC } from 'react';

// Styles
import styles from './styles.module.css';

type PropTypes = {
  children: string;
};

export const Title: FC<PropTypes> = ({ children }: PropTypes) => (
  <>
    <h1 className={styles.title}>{children}</h1>
  </>
);
