import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = ['Toyota', 'Hyundai', 'Honda'];

  getCarsService() {
    return this.cars;
  }
}
