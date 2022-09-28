import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'Toyota',
      createdAt: new Date().getTime(),
    },
  ];

  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;
    const brand: Brand = {
      id: uuid(),
      name: name.toLowerCase(),
      createdAt: new Date().getTime(),
    };

    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return `This action returns all brands`;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand)
      throw new NotFoundException(`The brand with id ${id} does not exist`);

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDb = this.findOne(id);
    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        brandDb = { ...brandDb, ...updateBrandDto, id };
        return brandDb;
      }
      return brand;
    });
    return brandDb;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }

  fillBrandsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
