// Core
import React, { FC, useState } from 'react';

type PropsType = {
  title?: string;
  // eslint-disable-next-line react/no-unused-prop-types,react/require-default-props
  children?: never;
};

export const Header: FC<PropsType> = ({ title }: PropsType) => {
  const content = typeof title === 'string' ? title.toLowerCase() : null;
  const [ counter, setCounter ] = useState<number>(1);

  const increase = () => setCounter(prev => prev + 1);
  const decrease = () => setCounter(prev => prev - 1);

  return (
    <>
      <h1>{content}</h1>
      <h3>{counter.toFixed()}</h3>
    </>
  );
};

Header.defaultProps = {
  title: 'Hello',
};
