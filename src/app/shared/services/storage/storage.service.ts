import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { firstValueFrom } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { addCar, deleteCar } from 'src/app/store/actions/car.actions';
import { OmniState } from 'src/app/store/reducers';
import { getCarSelector } from 'src/app/store/selectors/car/car.selectors';
import { ICarModel } from '../../models/car.model';
import { IStorageService } from './storage.service.type';

@Injectable()
export class StorageService implements IStorageService {

  constructor(private store: Store<OmniState>) { }

  private dispatchAction(action: TypedAction<any>) {
    this.store.dispatch(action);
  }

  public setCarSelected(product: ICarModel) {
    this.dispatchAction(addCar({ payload: product }));
  }

  public getCarSelected(): Promise<ICarModel> {
    return firstValueFrom(this.store.pipe(
      select(getCarSelector),
      map((Car) => Car),
      take(1)
    ))
  }

  public clearInfo(): void{
    this.dispatchAction(deleteCar());
  }
}
