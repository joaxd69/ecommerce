import { Injectable } from '@nestjs/common';
import { CreateProductDto, ProductType } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brand } from 'src/brands/entities/brand.entity';
import { Model } from 'src/models/entities/model.entity';
@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private ProductRepository:Repository<Product>,///inyectamos los modelos/tablas/entidad que vamos  a trabajar 
    @InjectRepository(Brand) private BrandRepository:Repository<Brand>,
    @InjectRepository(Model) private ModelRepository:Repository<Model>
    ){///productrepository sera una referencia a la tabla de product
  }
  async createProduct(product:CreateProductDto){//tipamos el producto que debemos recibir
    const existorcreate = await this.BrandRepository.findOne({where:{Name:product.Brand}});//buscamos en nuestras tablas, si existe lar marca del producto nuevo
    const brand =  !existorcreate? this.BrandRepository.create({Name:product.Brand}):existorcreate;//si no existe, lo creamos
    await this.BrandRepository.save(brand);//entonces guardamos la marca creada 

    const existmodel=await this.ModelRepository.findOne({where:{Name:product.Model.Name}})
    const model=!existmodel?this.ModelRepository.create(product.Model):existmodel
    await this.ModelRepository.save(model)

    const newProduct= new Product();///ahora creamos el nuevo producto
      newProduct.Name=product.Name;//y le pasamos los parametros
      newProduct.Characteristic=product.Characteristic;
      newProduct.Image=product.Image;
      newProduct.Model=[model]
      newProduct.ProductType=product.ProductType
      newProduct.Price=product.Price;
      newProduct.Characteristic=newProduct.Characteristic;
      newProduct.Brand=brand;//hacemos la relacion con nueva marca creada
    await this.ProductRepository.save(newProduct);///guardamos el  nuevo producto en nuestra base de datos
    return newProduct

  }


 async getAllProducts() {
    const allProducts=await this.ProductRepository.find({relations:["Brand","Model"]});///buscamos en  nuestra db , todos los productos, y retornamos incluyendo los relacionados
    return allProducts;
  }
 async getProductsByName(name:string ){///recibimos el nombre del producto que vamos a recibir por params
   const Product=await this.ProductRepository.findOne({
    where:{
      Name:name
    },
    relations:["Brand","Model"]
   });// lo buscamos 
   return Product?Product:{error:'No se encontraron resultados'}//y retornamos,(manejo de error temporal)
 }
 async getAllCellphones(type:ProductType){
  console.log(type);
  
  const products = await this.ProductRepository.find({
    where:{ProductType:type},
    relations:["Brand","Model"]
  })
  return products
 }

 async getAllTvs(){
  const products = await this.ProductRepository.find({
    where:{Name:'Tv'},
    relations:["Brand","Model"]
  })
  return products
 }

 async getAllComputer(){
  const products = await this.ProductRepository.find({
    where:{Name:'Computer'}
  })
  return products
 }


  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: string) {
    const deleteProduct= await this.ProductRepository.delete({Id:parseInt(id)})

    return `This action removes a #${id} product`;
  }
}




