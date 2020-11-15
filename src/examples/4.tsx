// Core
import React, {
  ReactElement,
  MouseEvent,
  FocusEvent,
  KeyboardEvent,
  FC,
} from 'react';

export type PropTypes = {
  onClick: (e: MouseEvent) => void,
};

export const Component3: FC<PropTypes> = (
  { onClick }: PropTypes,
): ReactElement => {
  const onFocus = (event: FocusEvent): void => {
    console.log(event.currentTarget);
  };
  return (
    <button
      type="button"
      onClick={onClick}
      onFocus={onFocus}
      onKeyDown={(e: KeyboardEvent): void => {
        console.log(e);
      }}
    >
      Click me
    </button>
  );
};
