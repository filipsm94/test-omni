import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empytCar } from 'src/app/shared/constans/car.constant';
import { ICarModel } from 'src/app/shared/models/car.model';
import { StorageService } from 'src/app/shared/services/storage/storage.service';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-detail-car',
  templateUrl: './detail-car.component.html',
  styleUrls: ['./detail-car.component.sass']
})
export class DetailCarComponent implements OnInit, OnDestroy {
  public car: ICarModel;

  urlImage = {'background-image':'url(car.Photo)'}

  constructor(
    private storageService: StorageService,
    private router: Router
    ) { 
      this.car = {...empytCar}
    }

  ngOnInit(): void {
    this.loadInfoTrasactions();
  }

  public async loadInfoTrasactions(): Promise<void>{
    this.car = await this.storageService.getCarSelected();
    this.urlImage = {
      ...this.urlImage, 
      "background-image": `url(${this.car.Photo})`
    }
    if(this.car.Brand === '')
      this.goToShowCase()
  }

  goToShowCase():void{
    this.router.navigate(['/rentcar'])
  }

  ngOnDestroy(): void {
    this.storageService.clearInfo()
  }

}
