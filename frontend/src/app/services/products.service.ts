import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'/// modulo que nos provee la posibilidad de hacer acciones asincronas como conectar al back end
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  BASE_URL:string ='http://localhost:3000'//declaramos nuestra url base del back end
  constructor(private http:HttpClient) { 
  }
  getAllproducts():Observable<any>{
    return this.http.get(`${this.BASE_URL}/products`)///traemos todos los productos
  }
  createProducts(body:any){
    return this.http.post(`${this.BASE_URL}/products`,body)///subimos nuevos productos
  }
}


///luego de crear estos servicios lo debemos importar en el module donde lo querramos usar