import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    name='string'
    productos:any[]= [];
   async  getphoto(){
       let products= await fetch('https://jsonplaceholder.typicode.com/photos')
       this.productos= await products.json()
       console.log(products)
      }
      
}
