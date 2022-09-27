import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Body,
  UsePipes,
} from '@nestjs/common';
import { Delete, Patch, Post, Query } from '@nestjs/common/decorators';
import { ParseUUIDPipe, ValidationPipe } from '@nestjs/common/pipes';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
// @UsePipes(ValidationPipe)
export class CarsController {
  constructor(private carsService: CarsService) {}
  @Get()
  getAllCars() {
    return this.carsService.findAllCars();
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findCarById(id);
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return { createCarDto, method: 'POST' };
  }

  @Patch(':id')
  updateCar(@Body() body: any, @Param('id') id: string, @Query() query: any) {
    return { id, body, method: 'PATCH', query };
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return { message: 'Deleted', id };
  }
}
