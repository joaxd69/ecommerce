import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { BrandsModule } from './brands/brands.module';
import { Product } from './products/entities/product.entity';
import { Brand } from './brands/entities/brand.entity';
import { ModelsModule } from './models/models.module';
import { Model } from './models/entities/model.entity';

import * as dotenv from 'dotenv';

dotenv.config(); // cargar las variables de entorno desde el archivo .env
const {PGPORT,PGDATABASE,PGHOST,PGPASSWORD,PGUSER}=process.env


@Module({
  imports:  [ 
    TypeOrmModule.forRoot({
      type: "postgres",
      host: PGHOST,
      port: parseInt(PGPORT),
      username: PGUSER,
    password: PGPASSWORD,
    database: PGDATABASE,
    entities: [Product,Brand,Model],
    synchronize:true,
    logging:true,
    // dropSchema:true //para resetear la base de datos
  }),
    ProductsModule,
    BrandsModule,
    ModelsModule,
 ],///añade funcionalidad extra 
 
  controllers: [AppController],//rutas que pueda tener el modulo get delete  post put
  providers: [AppService],
})/// aqui es donde se juntan los distintos modulos del sevidor
export class AppModule {}
