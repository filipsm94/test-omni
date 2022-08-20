import { TestBed } from '@angular/core/testing';
import { ICarModel } from 'src/app/shared/models/car.model';
import { CarApiService } from './car-api.service';
import { CarApiServiceStub } from './car-api.service.stub';

import { CarService } from './car.service';

describe('CarService', () => {
  let service: CarService;
  let carApiService: CarApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarService);

    TestBed.configureTestingModule({
      providers: [
        CarService,
        { provide: CarApiService, useClass: CarApiServiceStub },
      ],
    });
    service = TestBed.inject(CarService);
    carApiService = TestBed.inject(CarApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return list of cars', async () => {
    const mockCars: Array<ICarModel> = [
      {
        Photo: "assets/cars/audi-a5.png",
        Model: "a4",
        Year: 2004,
        Brand: "Audi",
        Price: 10000,
        description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        largeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        specifications: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed molestie dui et mauris imperdiet, non commodo felis iaculis.",
          "Pellentesque aliquam metus eu dolor gravida, id fringilla velit aliquam.",
          "Mauris tempor neque vitae ipsum luctus maximus."
        ]
      },
      {
        Photo: "https://dealerimages.dealereprocess.com/image/upload/c_limit,f_auto,fl_lossy,w_auto/v1/svp/dep/20audiq8/audi_20q8_angularfront_white",
        Model: "M3",
        Year: 2000,
        Brand: "BMW",
        Price: 10000,
        description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        largeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        specifications: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed molestie dui et mauris imperdiet, non commodo felis iaculis.",
          "Pellentesque aliquam metus eu dolor gravida, id fringilla velit aliquam.",
          "Mauris tempor neque vitae ipsum luctus maximus."
        ]
      }
    ];
    const expectedMockCars: Array<ICarModel> = [
      {
        Photo: "https://dealerimages.dealereprocess.com/image/upload/c_limit,f_auto,fl_lossy,w_auto/v1/svp/dep/20audiq8/audi_20q8_angularfront_white",
        Model: "M3",
        Year: 2000,
        Brand: "BMW",
        Price: 10000,
        description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        largeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        specifications: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed molestie dui et mauris imperdiet, non commodo felis iaculis.",
          "Pellentesque aliquam metus eu dolor gravida, id fringilla velit aliquam.",
          "Mauris tempor neque vitae ipsum luctus maximus."
        ]
      },
      {
        Photo: "assets/cars/audi-a5.png",
        Model: "a4",
        Year: 2004,
        Brand: "Audi",
        Price: 10000,
        description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        largeDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        specifications: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Sed molestie dui et mauris imperdiet, non commodo felis iaculis.",
          "Pellentesque aliquam metus eu dolor gravida, id fringilla velit aliquam.",
          "Mauris tempor neque vitae ipsum luctus maximus."
        ]
      },
    ];

    spyOn(carApiService, 'getAllCars').and.returnValue(Promise.resolve(mockCars));

    const result = await service.getAllOrderCars();

    expect(result).toEqual(expectedMockCars);

  });
});
