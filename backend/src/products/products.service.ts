import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brand } from 'src/brands/entities/brand.entity';
@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private ProductRepository:Repository<Product>,
    @InjectRepository(Brand) private BrandRepository:Repository<Brand>
    ){///productrepository sera una referencia a la tabla de product
  }
  async createProduct(product:CreateProductDto){
    const existorcreate = await this.BrandRepository.findOne({where:{Name:product.Brand}})
    const brand =  !existorcreate? this.BrandRepository.create({Name:product.Brand}):existorcreate
    await this.BrandRepository.save(brand);

    const newProduct= new Product();
      newProduct.Name=product.Name;
      newProduct.Characteristic=product.Characteristic
      newProduct.Image=product.Image
      newProduct.Model=product.Model
      newProduct.Price=product.Price;
      newProduct.Characteristic=newProduct.Characteristic
      newProduct.Brand=brand
  

    await this.ProductRepository.save(newProduct)
    return newProduct
   //la nueva marca la relacionamos con el producto creado

   ///guardamos el product relacionado
  }
  // @Controller('products')
  // export class ProductController {
  //   // ...
  
  //   @Post()
  //   async create(@Body() createProductDto: CreateProductDto) {
  //     const brand = await this.brandRepository.findOne(createProductDto.brandId);
  //     const product = new Product();
  //     product.name = createProductDto.name;
  //     product.price = createProductDto.price;
  //     product.brand = brand;
  //     await this.productRepository.save(product);
  //     return product;
  //   }
  // }


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
 
 async relation(){
  const product= new Product()
  product.Brand
 }
  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}




