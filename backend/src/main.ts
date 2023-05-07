import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
const {PORT}=process.env

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors:false});///Ejecuta todos los modulos
  app.enableCors()///permitir cors
  dotenv.config(); // carga las variables de entorno desde el archivo .env
  await app.listen(PORT);//puerto
}
bootstrap();//ejecuta la funcion que ejecuta todo el servidor 
