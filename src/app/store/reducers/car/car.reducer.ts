import { Action, createReducer, on } from '@ngrx/store';
import { empytCar } from 'src/app/shared/constans/car.constant';
import { ICarModel } from 'src/app/shared/models/car.model';
import { addCar, deleteCar } from '../../actions/car.actions';

export const omniCar: ICarModel = {...empytCar};

const _CarReducer = createReducer(
    omniCar,
    on(addCar, (state, { payload }) => payload),
    on(deleteCar, () => omniCar)
);

export function CarReducer(state: ICarModel = omniCar, action: Action) {
    return _CarReducer(state, action);
}
