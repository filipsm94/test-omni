import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { empytCar } from 'src/app/shared/constans/car.constant';
import { ICarModel } from 'src/app/shared/models/car.model';

@Component({
  selector: 'app-card-car',
  templateUrl: './card-car.component.html',
  styleUrls: ['./card-car.component.sass']
})
export class CardCarComponent {
  @Input() car: ICarModel;

  @Output() carSelectionEvent = new EventEmitter<ICarModel>();

  constructor() {
    this.car = {...empytCar}
  }
  sendToDetail(): void {
    this.carSelectionEvent.emit(this.car);
  }

}
