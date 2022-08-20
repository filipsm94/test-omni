import { ICarModel } from '../../models/car.model';

export interface IStorageService {
  setCarSelected(car: ICarModel): void;

  getCarSelected(): Promise<ICarModel>;

  clearInfo(): void
}
