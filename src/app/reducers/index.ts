import { ActionReducerMap } from '@ngrx/store';

import { counterReducer } from './counter.reducer';
import { AppState } from '../shared/app-state';

export const reducers: ActionReducerMap<AppState> = {
  counter: counterReducer,
};
