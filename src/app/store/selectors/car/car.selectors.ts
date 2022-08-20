import { createSelector } from '@ngrx/store';
import { OmniState } from '../../reducers';

const carSelector = (state: OmniState) => state.car;

export const getCarSelector = createSelector(
    carSelector,
    (user) => user
);
