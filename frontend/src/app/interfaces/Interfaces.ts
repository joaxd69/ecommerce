
export  interface sections{
   cellphone:boolean,
   AudioVideo:boolean,
   Informatica:boolean,
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
export  interface Products{
   Name:string,
   Price:number,
   Model:Model,
   Characteristic: object,
   Image:string,
   Brand:string
}
export  interface ProductsApi{
   Name:string,
   Price:number,
   Model:Model[],
   Characteristic: object,
   Image:string,
   Brand:{
      Name:string
   }
}
export interface BrandApi{
   Id:string,
   Name:string,
   ProductsTypes?:boolean,
   products:ProductsApi,
   

}