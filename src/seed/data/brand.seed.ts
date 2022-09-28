import { Brand } from '../../brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRANDS_SEEDS: Brand[] = [
  {
    id: uuid(),
    name: 'Toyota',
    createdAt: new Date().getTime(),
  },
];
