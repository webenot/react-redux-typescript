// Core
import React, { ReactElement, ReactNode, FC } from 'react';

export type PropTypes = {
  title?: string;
  children: ReactNode;
};

export const Component2: FC<PropTypes> = (
  {
    children,
    title,
  }: PropTypes,
): ReactElement => (
  <div>
    {title}
    :
    {children}
  </div>
);
