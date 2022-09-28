import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEEDS } from './data/brand.seed';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from '../brands/brands.service';

@Injectable()
export class SeedService {
  constructor(
    private carsService: CarsService,
    private brandsService: BrandsService,
  ) {}

  populateDB() {
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandsService.fillBrandsWithSeedData(BRANDS_SEEDS);
    return 'Seed executed successfully';
  }
}
