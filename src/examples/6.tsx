import React, { ReactElement } from 'react';

const styles = {
  primary: {
    color: 'blue',
  },
  danger: {
    color: 'red',
  },
};

type StylesType = typeof styles;

type ButtonType = keyof StylesType;

interface IProps {
  type: ButtonType;
}

export function Button ({ type }: IProps): ReactElement {
  return (
    <button
      style={styles[type]}
      type="button"
    >
      Click me
    </button>
  );
}
