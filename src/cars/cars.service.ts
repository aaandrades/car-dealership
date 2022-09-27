import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    { id: uuid(), brand: 'Toyota', owner: 'Andres', model: 'Corolla' },
    { id: uuid(), brand: 'Nissan', owner: 'Alexander', model: 'Versa' },
    { id: uuid(), brand: 'Honda', owner: 'Alex', model: 'Civic' },
  ];

  findAllCars() {
    return this.cars;
  }

  findCarById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car)
      throw new NotFoundException(`The car with ID ${id} does not exist'`);

    return car;
  }
}
