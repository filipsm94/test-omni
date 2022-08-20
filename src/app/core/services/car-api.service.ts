import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICarModel } from 'src/app/shared/models/car.model';

@Injectable()
export class CarApiService {

  private _dataUrl = 'assets/cars.json'

  constructor(private http: HttpClient) { }

  getAllCars(): Promise<Array<ICarModel>> {
    return firstValueFrom(
      this.http.get<Array<ICarModel>>(`${this._dataUrl}`).pipe(map((response:any) => response.data))
    );
  }
}
