import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { OpaqueTextPipe } from '../shared/pipes/opaque-text.pipe';
import { CardCarComponent } from './components/card-car/card-car.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailCarComponent } from './components/detail-car/detail-car.component';
import { CoreRoutingModule } from './core-routing.module';
import { CarApiService } from './services/car-api.service';
import { CarService } from './services/car.service';
import { FilterFormComponent } from './components/filter-form/filter-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    DetailCarComponent,
    OpaqueTextPipe,
    CardCarComponent,
    FilterFormComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    OpaqueTextPipe,
    CarApiService,
    CarService
  ]
})
export class CoreModule { }
