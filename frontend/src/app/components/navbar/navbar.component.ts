import { Component } from '@angular/core';
import {sections,Products, BrandApi} from '../../interfaces/Interfaces'
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  template:'<span #span>Audio y video </span>'
})
export class NavbarComponent {
   
  sections:sections={
    cellphone:false,
    AudioVideo:false,
    Informatica:false,
    Gaming:false,
    Accesories:false,
    Apliances:false
  }
  
  Brands:BrandApi[]=[]
  constructor(private ProductsService:ProductsService){}
  ngOnInit(){
   this.ProductsService.getAllBrands().subscribe((res)=>{
    this.Brands=res
    console.log(this.Brands)
   })
  }
 
  change(type:keyof sections){
    let iterator:keyof sections// tipamos a iterator como clave de sections
    for ( iterator in this.sections) {///seteamos todos en false
       this.sections[iterator]=false
    }
  this.sections[type]=true// y seteamos en true la seccion actual que queremos ver
  }  
}
