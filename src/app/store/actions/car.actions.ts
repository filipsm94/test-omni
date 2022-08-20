import { createAction, props } from '@ngrx/store';
import { ICarModel } from 'src/app/shared/models/car.model';

export const addCar = createAction('[Core Module] add Car', props<{payload: ICarModel}>());
export const deleteCar = createAction('[Core Module] delete Car');
