import { Component } from '@angular/core';
import { Products } from 'src/app/interfaces/Interfaces';
import { ProductsService } from 'src/app/services/products.service'; ///uestro servicio que nos conectara con el back end
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
     
  constructor(private productservice:ProductsService){

  }
      
    holamundo:string='holamundo'
    newProduct:Products={
      Name:'',
      Type:'',
      Image:'',
      Price:0,
      Characteristic:{}
    }
    updateObject<k extends keyof Products> (actualinput:k,value:Products[k]){///K representa un tipado que se refiere a que sera key de un objeto en este caso de Products
       this.newProduct[actualinput]=value
    }
  
    onChange(event: Event) {
      const valorInput = (event.target as HTMLInputElement).value;
      const actualInput=(event.target as HTMLInputElement).name;
      
      this.updateObject(actualInput as keyof Products,valorInput)
      console.log(this.newProduct)
    }

    onClick(){
       this.productservice.getAllproducts().subscribe(res=>console.log(res))
    }
    createProduct(){
      this.productservice.createProducts(this.newProduct).subscribe(res=>console.log(res)
      )
    }
}
