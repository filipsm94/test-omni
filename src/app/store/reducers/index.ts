import { ActionReducerMap } from '@ngrx/store';
import { ICarModel } from 'src/app/shared/models/car.model';
import { CarReducer } from './car/car.reducer';

export interface OmniState {
    car: ICarModel;
}

export const reducers: ActionReducerMap<OmniState> = {
    car: CarReducer,
};
