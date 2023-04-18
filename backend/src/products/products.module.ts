import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Brand } from 'src/brands/entities/brand.entity';
import { Model } from 'src/models/entities/model.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Product,Brand,Model])],///importamos las entidades que usaremos 
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
