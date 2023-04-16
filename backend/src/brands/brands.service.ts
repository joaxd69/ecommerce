import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from 'src/products/entities/product.entity';
@Injectable()
export class BrandsService {

    constructor(
      @InjectRepository(Brand) private BrandRepository:Repository<Brand>,
      @InjectRepository(Product) private ProductRepository:Repository<Product> 
      ){}


async  createBrand(brand:CreateBrandDto) {
  // const product=await this.ProductRepository.findOne({where:{Name:brand.products}} )
  
    return brand?this.BrandRepository.save(brand):'Error al crear'
    
  }

  async findByName(name:string){
     const brand=await this.BrandRepository.findOne({where:{Name:name}})
     return brand
  }
  
  async findAll() {
      const allbrands= await this.BrandRepository.find()
      
      return allbrands.length?allbrands:'sin marcas'
    
    } 

  findOne(id: number) {
    return `This action returns a #${id} brand`;
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return `This action updates a #${id} brand`;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}


//usaremos este .service para definir los metodos que se comunicaran con la base de datos. Podemos verlo como si fuese un biblioteca que 
//se comunica con la base de datos