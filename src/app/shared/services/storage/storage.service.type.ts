import { ICarModel } from '../../models/car.model';

export interface IStorageService {

  // setCar(Car: ICarModel): void;

  // getCar(): Promise<ICarModel>;

  setCarSelected(car: ICarModel): void;

  getCarSelected(): Promise<ICarModel>;
}
