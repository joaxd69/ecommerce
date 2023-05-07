import { Component } from '@angular/core';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { BrandApi, ProductType, sections } from 'src/app/interfaces/Interfaces';
import { ProductsService } from 'src/app/services/products/products.service';
@Component({
  selector: 'app-menuresponsive',
  templateUrl: './menuresponsive.component.html',
  styleUrls: ['./menuresponsive.component.css']
})
export class MenuresponsiveComponent {
  Linkedin=faBars
  sections:sections={
    Cellphones:false,
    Audiovideo:false,
    Informatics:false,
    Gaming:false,
    Accesories:false,
    Apliances:false
  }
  Brands:BrandApi[]=[]
  BrandsBackup:BrandApi[]=[]
  ActualSection:keyof typeof ProductType= 'default'

  constructor(private ProductsService:ProductsService){}
  
  ngOnInit(){
   this.ProductsService.getAllBrands().subscribe((res:BrandApi[])=>{
    this.Brands=res
    this.BrandsBackup=res
    console.log(this.Brands)
   });
  }
 
  change(type:keyof sections){
    let iterator:keyof sections// tipamos a iterator como clave de sections
    // for ( iterator in this.sections) {///seteamos todos en false
    //    this.sections[iterator]=false  
    // }
  
    this.Brands=this.BrandsBackup.filter(a=>a.products.filter(a=>a.ProductType===type).length)
    console.log(this.Brands);
    this.sections[type]=!this.sections[type]// y seteamos en true la seccion actual que queremos ver
  }
  
}
