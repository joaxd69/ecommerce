import { Component } from '@angular/core';
import { ProductType, Products, ProductsApi } from 'src/app/interfaces/Interfaces';
import { ProductsService } from 'src/app/services/products/products.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cellphone-products',
  templateUrl: './cellphone-products.component.html',
  styleUrls: ['./cellphone-products.component.css']
})
export class CellphoneProductsComponent {
  Title:string='Celulares'
  Products:ProductsApi[]=[]
  ProductsR:ProductsApi[]=[]
  TotalProducts:number=0
  Section:string='Celular'
  mensaje :string=''
 ngOnInit(){
  this.traerinfo()

}
 
 constructor(private ProductsService:ProductsService,private route: ActivatedRoute){

 }
  
 traerinfo(){///traemos info del back end
  const myQueryParam = this.route.snapshot.queryParamMap.get('name');
  if(!myQueryParam){
  this.ProductsService. getSomeProducts(ProductType.Cellphones).//accedemos al metodo que hace una peticion a la ruta que nos da los celulares
  subscribe((res)=>{//metodo subscribe que nos resuelve la promesa
    this.Products=res;//en nuestra variable guardamos el resultado de la peticion
    this.ProductsR=res;//guardamos tambien en nuestra variable de respaldo(respaldo para resetear,ordenar por default,etc)
    console.log(this.Products);//vemos en consola que llega del back
    this.TotalProducts=this.Products.length//Nos quedamos con la cantidad de productos y le pasamos ese total a nuestra variable
  })
  }else{
    this.ProductsService. getSomeProducts(ProductType.Cellphones).//accedemos al metodo que hace una peticion a la ruta que nos da los celulares
  subscribe((res)=>{//metodo subscribe que nos resuelve la promesa
    this.Products=res.filter(i=>i.Brand.Name===myQueryParam);//en nuestra variable guardamos el resultado de la peticion
    this.ProductsR=res;//guardamos tambien en nuestra variable de respaldo(respaldo para resetear,ordenar por default,etc)
    console.log(this.Products);//vemos en consola que llega del back
    this.TotalProducts=this.Products.length//Nos quedamos con la cantidad de productos y le pasamos ese total a nuestra variable
  })
  }
 
  
 }

 OrderProducts(mensaje:string) {//creamos nuestra funcion que ordenara los productos, esta funcion resibira datos de otro componente , recibira el valor de los options de un select

  const filter = mensaje==='ASC'?[].concat(<never>this.Products).sort((a:ProductsApi,b:ProductsApi)=>a.Price-b.Price):///ordenara los celulares de menor a mayor precio
                  mensaje==='DESC'? [].concat(<never>this.Products).sort((a:ProductsApi,b:ProductsApi)=>b.Price-a.Price)://ordenara los celulares de mayor a menos precio
                  this.ProductsR//si no recibe los valores anteriores ordenara como se encontraba en un inicio
   this.Products=filter//le pasamos el array ordenado
   this.TotalProducts=this.Products.length
 }
 
 FilterByBrands(value:string){
  const filterbybrand=value==='all'?this.ProductsR:this.ProductsR.filter(i=>i.Brand.Name===value)
  this.Products=filterbybrand
  console.log('by brands')
  this.TotalProducts=this.Products.length
 }

 FilterByModels(value:string){
  const filterbymodel=value==='all'?this.ProductsR:this.ProductsR.filter(i=>i.Model.filter(name=>name.Name===value).length)
  this.Products=filterbymodel
  this.TotalProducts=this.Products.length
 }
}
