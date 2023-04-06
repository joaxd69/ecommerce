import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors:false});///Ejecuta todos los modulos
  app.enableCors()///permitir cors
  await app.listen(3000);//puerto
}
bootstrap();//ejecuta la funcion que ejecuta todo el servidor 
