import { CreateModelDto } from "src/models/dto/create-model.dto";
import { Model } from "src/models/entities/model.entity";

////usaremos el dto para tipar los datos que podamos recibir por body por ejemplo, basicamente tipa como se precisas en la entidad/tabla Products
export enum ProductType{
    Cellphones= 'Cellphones',
    Audiovideo= 'Audiovideo',
    Informatics='Informatics',
    Gaming= 'Gaming',
    Accesories= 'Accesories',
    Apliances= 'Apliances'
}
export class CreateProductDto {
 Name:string;
 Price:number;
 Model:CreateModelDto;
 Characteristic: ProductCharacteristic;
 Image:string;
 Brand?:string///ya que este sera el que se relacione recibira una string, que luego creara otra fila en la tabla de Brand.
 ProductType:ProductType
}
export class ProductCharacteristic{
    Description:string;
    Memory?:string;
    MemoryRam?:string;
    Camera?:string;
    Colors?:string[];
    ScreenSize?:number;
}

