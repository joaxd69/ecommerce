import { CreateModelDto } from "src/models/dto/create-model.dto";
import { Model } from "src/models/entities/model.entity";

////usaremos el dto para tipar los datos que podamos recibir por body por ejemplo, basicamente tipa como se precisas en la entidad/tabla Products
export class CreateProductDto {
 Name:string;
 Price:number;
 Model:CreateModelDto;
 Characteristic: object;
 Image:string;
 Brand?:string///ya que este sera el que se relacione recibira una string, que luego creara otra fila en la tabla de Brand.
}
