import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {

  }

  @Post()
  create(@Body() newProduct: CreateProductDto ) {
    return this.productsService.createProduct(newProduct)
  }

  @Get() 
  findAll() {
    return this.productsService.getAllProducts();
  }
  @Get(':id')
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
