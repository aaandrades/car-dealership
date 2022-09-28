import { Car } from '../../cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  { id: uuid(), brand: 'Toyota', model: 'Corolla' },
  { id: uuid(), brand: 'Nissan', model: 'Versa' },
  { id: uuid(), brand: 'Honda', model: 'Civic' },
];
