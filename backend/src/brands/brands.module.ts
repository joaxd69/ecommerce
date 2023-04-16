import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from './entities/brand.entity';
import { Product } from 'src/products/entities/product.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Brand,Product])],
  controllers: [BrandsController],
  providers: [BrandsService]
})
export class BrandsModule {}
