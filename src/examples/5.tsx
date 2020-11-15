// Core
import React, { ReactElement, ReactNode } from 'react';

interface IProps<T> {
  children: (item: T) => ReactNode;
  items: Array<T>;
}

export function Component5<T> (
  {
    items,
    children,
  }: IProps<T>,
): ReactElement {
  return (
    <div>
      {
        items.map((item) => (
          children(item)
        ))
      }
    </div>
  );
}
