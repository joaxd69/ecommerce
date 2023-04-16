import { CreateBrandDto } from "src/brands/dto/create-brand.dto";
import { Brand } from "src/brands/entities/brand.entity";

export class CreateProductDto {
 Name:string;
 Price:number;
 Model:string;
 Characteristic: object;
 Image:string;
 Brand?:string
}
