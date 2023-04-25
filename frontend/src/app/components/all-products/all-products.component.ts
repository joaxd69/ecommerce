import { Component } from '@angular/core';
import { Products } from 'src/app/interfaces/Interfaces';
import { ProductsService } from 'src/app/services/products/products.service';////traemos el servicio que hace la peticion a la api
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {
  Name:string='Holaaa'
  constructor(private productService:ProductsService){////le inyectamos el servicio  a  la clase 

  } 

  products:Products[]=[]///declaramos lo que recibira , sera un array con productos donde los items estan tipados con la interface Products previamente definida
  ngOnInit(){//ngOnInit nos permite ejecutar las funciones que pongamos dentro , al iniciar el componente
    this.productService.getAllproducts()// accedemos al servicio que importamos y accedemos al metodo getAllproducts que nos trae de la api informacion
    .subscribe((res)=>this.products=res);///la informacion que nos llega la guardamos dentro de nuestra variable o estado products
  }

}
