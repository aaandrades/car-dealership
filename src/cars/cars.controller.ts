import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}
  @Get()
  getAllCars() {
    return ['Toyota', 'Hyundai', 'Honda'];
  }

  @Get(':id')
  getCarById(@Param('id') id: string) {
    return this.carsService.getCarsService();
  }
}
