import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    { id: uuid(), brand: 'Toyota', model: 'Corolla' },
    // { id: uuid(), brand: 'Nissan', model: 'Versa' },
    // { id: uuid(), brand: 'Honda', model: 'Civic' },
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

  create(createCarDto: CreateCarDto) {
    const newCar = { ...createCarDto, id: uuid() };
    this.cars = [...this.cars, newCar];
    return newCar;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDb = this.findCarById(id);
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDb = { ...carDb, ...updateCarDto, id };
        return carDb;
      }
      return car;
    });
    return carDb;
  }

  delete(id: string) {
    this.findCarById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return this.cars;
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
