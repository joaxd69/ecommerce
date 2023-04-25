import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'/// modulo que nos provee la posibilidad de hacer acciones asincronas como conectar al back end
import {Observable} from 'rxjs'
import { Products, ProductsApi } from 'src/app/interfaces/Interfaces';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  BASE_URL:string ='http://localhost:3000'//declaramos nuestra url base del back end
  constructor(private http:HttpClient) { 
  }
  getAllBrands():Observable<any[]>{
    return this.http.get<(any[])>(`${this.BASE_URL}/brands`)
  }
  getAllcellphones():Observable<ProductsApi[]>{
    return this.http.get<ProductsApi[]>(`${this.BASE_URL}/products/cellphones`)
  }
  getAllproducts():Observable<Products[]>{
    return this.http.get<Products[]>(`${this.BASE_URL}/products`)///traemos todos los productos
  }
  getAllModels():Observable<any[]>{
    return this.http.get<any[]>(`${this.BASE_URL}/models`)
  }
  createProducts(body:any){
    return this.http.post(`${this.BASE_URL}/products`,body)///subimos nuevos productos
  }
}


///luego de crear estos servicios lo debemos importar en el module donde lo querramos usar