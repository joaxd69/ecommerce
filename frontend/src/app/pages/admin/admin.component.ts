import { Component } from '@angular/core';
import { Products,Model } from 'src/app/interfaces/Interfaces';
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
    Model:Model={
      Name:'',
      Stock:{
        avaliable:true,
        stockNumber:0
      }
    }
    newProduct:Products={
      Name:'',
      Model:this.Model,
      Image:'',
      Price:0,
      Characteristic:{},
      Brand:''
    }
    updateModel<k extends keyof Model>(actualInput:k,value:Model[k]){
      this.Model[actualInput]=value
    }
    updateObject<k extends keyof Products> (actualinput:k,value:Products[k]){///K representa un tipado que se refiere a que sera key de un objeto en este caso de Products
       this.newProduct[actualinput]=value
    }
    updateStock(event: Event){
      const valorInput = (event.target as HTMLInputElement).value;
      const actualInput=(event.target as HTMLInputElement).name;
      this.Model.Stock.stockNumber=parseInt(valorInput)
      valorInput==='true'?this.Model.Stock.avaliable=true:
      this.Model.Stock.avaliable=false
     
    }
    onChange(event: Event,model:boolean) {
      const valorInput = (event.target as HTMLInputElement).value;
      const actualInput=(event.target as HTMLInputElement).name;
      !model?this.updateObject(actualInput as keyof Products,valorInput):
      this.updateModel(actualInput as keyof Model,valorInput)

      console.log(this.newProduct,this.Model)
    }
//////////////////las que interactuan con el back
    onClick(){
       this.productservice.getAllproducts().subscribe(res=>console.log(res))
    }
    createProduct(){
      this.productservice.createProducts(this.newProduct).subscribe(res=>console.log(res)
      )
    }
}
