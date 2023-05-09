
export  interface sections{
   Cellphones:boolean,
   Audiovideo:boolean,
   Informatics:boolean,
   Gaming:boolean,
   Accesories:boolean,
   Apliances:boolean,
}
export interface Model{
   Name:string,
   Stock:{
      avaliable:boolean,
      stockNumber:number
   }
}
export enum ProductType{
   default='',
   Cellphones= 'Cellphones',
   Audiovideo= 'Audiovideo',
   Informatics='Informatics',
   Gaming= 'Gaming',
   Accesories= 'Accesories',
   Apliances= 'Apliances'
}
export interface ProductCharacteristic{
   Description:string;
   Memory?:string;
   MemoryRam?:string;
   Camera?:string;
   Colors?:string[];
   ScreenSize?:number;
}
export  interface Products{
   Name:string,
   Price:number,
   Model:Model,
   Characteristic: ProductCharacteristic,
   Image:string,
   Brand:string
   ProductType:ProductType|undefined
}
export  interface ProductsApi{
   Name:string,
   Price:number,
   Model:Model[],
   Characteristic: ProductCharacteristic,
   Image:string,
   ProductType:ProductType|undefined,
   Brand:{
      Name:string
   }
}
export interface BrandApi{
   Id:string,
   Name:string,
   ProductsTypes?:ProductType,
   products:[ProductsApi],
}
export interface modelvalidator{
   Name?:string,
   Stock?:{
      avaliable?:boolean,
      stockNumber?:number
   }
}
export interface Errorvalidators {
   General?:string,
   Name?:string,
   Price?:string,
   Model?:string,
   Characteristic?: string,
   Image?:string,
   Brand?:string
   ProductType?:string
}