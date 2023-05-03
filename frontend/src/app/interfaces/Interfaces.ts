
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
export  interface Products{
   Name:string,
   Price:number,
   Model:Model,
   Characteristic: object,
   Image:string,
   Brand:string
   ProductType:ProductType|undefined
}
export  interface ProductsApi{
   Name:string,
   Price:number,
   Model:Model[],
   Characteristic: object,
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