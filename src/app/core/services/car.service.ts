import { Injectable } from '@angular/core';
import { ICarModel } from 'src/app/shared/models/car.model';
import { CarApiService } from './car-api.service';

@Injectable()
export class CarService {

  constructor(private carsApi: CarApiService) { }

  async getAllOrderCars(): Promise<Array<ICarModel>> {
    const carsList = await this.carsApi.getAllCars()
    return carsList.sort((a, b) => (a.Year - b.Year))
  }

  async filterCars(filterValue: string): Promise<Array<ICarModel>> {

    const carsList = await this.getAllOrderCars()
    if (filterValue == '')
      return carsList

    const filterList = carsList.filter(({ Brand }) => filterValue.toUpperCase() === Brand.toUpperCase())
    if (filterList.length > 0) {
      return filterList
    } else {
      alert('No se encontraron carros con ese nombre')
      return carsList
    }
  }
}
