import { Controller, Get, Post, Body, Patch, Param, Delete,Query } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Post()
 async create(@Body() newBrand: CreateBrandDto) {
     const exist= await this.brandsService.findByName(newBrand.Name)
     
     const result= !newBrand.Name||!newBrand.ProductsTypes?.length ||exist?//vemos si pusieron los datos obligatorios
                    'No se pudo crear la marca':////manejo de errores temporal
                    await this.brandsService.createBrand(newBrand)

    return typeof result==='object'?`La marca ${newBrand.Name} fue creada con exito`:result    
  }
 
  @Get()
  findAll() {
    return this.brandsService.findAll();
  }

  @Get('otro')
 async findOne(@Query('name') name: string) {
   const brand=await this.brandsService.findByName(name)

    return brand?brand:'Producto no encontrado'
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
    return this.brandsService.update(+id, updateBrandDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brandsService.remove(+id);
  }
}
