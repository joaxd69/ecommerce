import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);///Ejecuta todos los modulos
  await app.listen(3000);//puerto
}
bootstrap();//ejecuta la funcion que ejecuta todo el servidor 
