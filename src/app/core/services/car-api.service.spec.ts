import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CarApiService } from './car-api.service';
import { ICarModel } from 'src/app/shared/models/car.model';
import { empytCar } from 'src/app/shared/constans/car.constant';

describe('CarApiService', () => {
  let service: CarApiService;
  let httpMock: HttpTestingController;
  const responseMock = {
    data: {

    },
    notification: {}
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CarApiService,
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(CarApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be getAllProductsToUser successful', () => {
    const mockUser: ICarModel = {
      ...empytCar,
      Brand:'bmw'
    };

    service.getAllCars(
      ).then((response) => {
        expect(response).toBeDefined();
    });
    const request = httpMock.expectOne(`assets/cars.json`);
    expect(request.request.method).toBe('GET'); ``;
    request.flush(responseMock);
  });
});
