import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICarModel } from 'src/app/shared/models/car.model';
import { StorageService } from 'src/app/shared/services/storage/storage.service';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  listOfCars: Array<ICarModel> = []

  constructor(
    private carService: CarService,
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.FillCars()
  }

  async FillCars(): Promise<void> {
    this.listOfCars = await this.carService.getAllOrderCars()
  }


  public goToSelectionCarToDetail(carEvent: ICarModel): void {
    this.storageService.setCarSelected(carEvent);
    this.router.navigate(['rentcar/detail']);
  }

  async filterListCars(filterEvent: string): Promise<void> {
    this.listOfCars = await this.carService.filterCars(filterEvent)
  }

}
