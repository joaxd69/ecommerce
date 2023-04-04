import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Product) private ProductRepository:Repository<Product>){///productrepository sera una referencia a la tabla de product

  }
  createProduct(product:CreateProductDto){
    const newProduct=this.ProductRepository.create(product)
    return this.ProductRepository.save(newProduct)
  }


 async getAllProducts() {
    const allProducts=await this.ProductRepository.find()
    return allProducts;
  }
 async getProductsByName(name:string ){
   const Product=await this.ProductRepository.findOne({
    where:{
      Name:name
    }
   })
   return Product?Product:{error:'No se encontraron resultados'}//manejo de error temporal
 }
 
  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
