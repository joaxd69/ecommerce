import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
////en esta seccion, creamos las rutas donde recibimos las peticiones, y ejecutamos los distintos metodos se service,que vienen con ProductsService
@Controller('products')//ruta products
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {

  }

  @Post()///lo que haremos en una peticion post
  create(@Body() newProduct: CreateProductDto ) {///tipamos lo que recibimos por body
    return this.productsService.createProduct(newProduct)///ejecutamos y retornamos la funcion que guarda el nuevo producto en la base de datos y hace la relacion con la marca
  }

  @Get() 
  findAll() {
    return this.productsService.getAllProducts();//para una peticion get, retornamos todos los productos
  }
  @Get(':id')///podremos buscar por id  algunos productos espesificos
   getProductsByName(@Param('id') id:string){
    return this.productsService.getProductsByName(id)
   }
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.productsService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
