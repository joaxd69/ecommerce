import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-products-cards',
  templateUrl: './products-cards.component.html',
  styleUrls: ['./products-cards.component.css']
})
export class ProductsCardsComponent {
  @Input()
  Model:string=''
  @Input()
  Image:string=''
  @Input()
  Brand:any=''
  @Input()
  Type:string=''
  @Input()
  Price:number|string=''
}
