import { Component, Input } from '@angular/core';
import {sections,Products, BrandApi, ProductType} from '../../interfaces/Interfaces'
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  template:'<span #span>Audio y video </span>'
})
export class NavbarComponent {
   
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
   this.veroptions()
  }
 
  change(type:keyof sections){
    let iterator:keyof sections// tipamos a iterator como clave de sections
    for ( iterator in this.sections) {///seteamos todos en false
       this.sections[iterator]=false
       
    }
    console.log(type)
    this.Brands=this.BrandsBackup.filter(a=>a.products.filter(a=>a.ProductType===type).length)
    console.log(this.Brands);
    this.sections[type]=true// y seteamos en true la seccion actual que queremos ver
  }  
  veroptions(){
    let options = document.querySelectorAll('.SectionOptions') 
    let section4 = document.getElementById('section4')as HTMLElement;
    options.forEach((ops)=>{
      ops.addEventListener('mouseover',()=>{
        section4.style.display='block'
      })
      section4.addEventListener('mouseover',()=>{
        section4.style.display='block'
      
      })
      section4.addEventListener('mouseleave',()=>{
        section4.style.display='none'
       
      })
      ops.addEventListener('mouseleave',()=>{
         section4.style.display= 'none'
       
      })
    })
  }
}
