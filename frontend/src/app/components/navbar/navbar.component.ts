import { Component, Input } from '@angular/core';
import {sections,Products, BrandApi, ProductType} from '../../interfaces/Interfaces'
import { ProductsService } from 'src/app/services/products/products.service';
// import { bar} from '@fortawesome/free-brands-svg-icons';
import { faBars, faCartShopping, faSearch, faUserCog, faUserShield, faUserTie} from '@fortawesome/free-solid-svg-icons';
// import { } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  template:'<span #span>Audio y video </span>'
})
export class NavbarComponent {
    Menu=faBars
    Carret=faCartShopping
    Admin=faUserCog
    Search=faSearch
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
  responsive:boolean=false
  constructor(private ProductsService:ProductsService){}
  
  ngOnInit(){
   this.ProductsService.getAllBrands().subscribe((res:BrandApi[])=>{
    this.Brands=res
    this.BrandsBackup=res
    console.log(this.Brands)
   });
   this.veroptions()
  //  this.pantallasize(this.responsive)
  }
 
  seemenu(){
    this.responsive=true
    
  }
//   pantallasize(size:boolean){
//     // Agregar un event listener para el evento 'resize'
  

// window.addEventListener('resize', function() {
//   // Obtener el ancho de la ventana del navegador
//   let windowWidth = window.innerWidth;
//   // Hacer algo en función del tamaño de la pantalla
//   if (windowWidth  < 950 &&!size) {
//     console.log('respomsive');
//     size=true
//   }
//   if (windowWidth  > 950 &&size) {
//     console.log(' no responsive');
//     size=false
//   }
// });

//   }
  change(type:keyof sections){
    let iterator:keyof sections// tipamos a iterator como clave de sections
    for ( iterator in this.sections) {///seteamos todos en false
       this.sections[iterator]=false  
    }
  
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
