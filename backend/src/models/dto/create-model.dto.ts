export class CreateModelDto {
    Name:string;
    Stock:{
        avaliable:boolean,
        StockNumber:number
    }
    Product?:any
};