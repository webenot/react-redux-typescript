// Core
import React, { FC, ReactElement } from 'react';

// Hooks
import { useStarshipsFetch } from './hooks/useStarshipsFetch';

// Elements
import { Title } from '../../elements/title';

// Types
import { Starship } from './types';

export const Starships: FC = () => {
  const { isFetching, data, error } = useStarshipsFetch();
  const errorMessageJSX = error && (<p>{error}</p>);
  const loaderJSX = isFetching && (<p>Loading data from API...</p>);

  const listJSX = isFetching ||
    data.results.map(
      (
        { name }: Starship,
        index: number,
      ): ReactElement => (<li key={Number(index)}>{name}</li>),
    );

  return (
    <>
      <Title>Starships</Title>
      {errorMessageJSX}
      {loaderJSX}
      {listJSX}
    </>
  );
};
