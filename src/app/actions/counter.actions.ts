import { createAction, props } from '@ngrx/store';

import { CounterState } from '../reducers/counter.reducer';

export const increment = createAction('[counter] Increment');
export const decrement = createAction('[counter] Decrement');
export const reset = createAction('[counter] Reset', props<{ count: CounterState }>());
