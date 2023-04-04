import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

///aqui podemos crear las rutas, usando los metodos creados en el appService
@Controller()// entre parentesis iria el endpoint en este caso iria en '/'
export class AppController {
  constructor(private readonly appService: AppService) {}///constructor opcional

  @Get()//ruta get

  getHello():string{
    return  this.appService.getHello()
  }

}
