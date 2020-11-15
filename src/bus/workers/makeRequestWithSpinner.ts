// Core
import { SagaIterator } from '@redux-saga/core';
import { put, call } from '@redux-saga/core/effects';
import { ActionCreator, AnyAction } from 'redux';

// Common types
import { FillActionType, ErrorActionType } from '../../types';

type OptionsType<T> = {
  fetcher: (uri?: string) => Promise<T>,
  fetcherParam?: string,
  startFetching: ActionCreator<AnyAction>,
  stopFetching: ActionCreator<AnyAction>,
  fill: FillActionType<T>,
  setErrorAction: ErrorActionType,
};

export function* makeRequestWithSpinner<T> (
  options: OptionsType<T>,
): SagaIterator {
  const {
    fetcher,
    fetcherParam,
    startFetching,
    stopFetching,
    fill,
    setErrorAction,
  } = options;

  try {
    yield put(startFetching());

    const result = yield call(fetcher, fetcherParam);

    yield put(fill(result));
  } catch (error) {
    yield put(setErrorAction(error.message));
  } finally {
    yield put(stopFetching());
  }
}
