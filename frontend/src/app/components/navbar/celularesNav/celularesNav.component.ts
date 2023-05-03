import { Component, Input } from '@angular/core';
import { BrandApi } from 'src/app/interfaces/Interfaces';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-celulares',
  templateUrl: './celularesNav.component.html',
  styleUrls: ['./celularesNav.component.css']
})
export class CelularesComponent {
   @Input()
   Brands:BrandApi[]=[]

   reloadPage(): void {
    setTimeout(() => {
       window.location.reload();
    }, 1);
   
  }
   constructor(private ProductsService:ProductsService){}
  
}
