import { Component,Output,EventEmitter, Input } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  Brands:string[]=[]
  Models:any[]=[]
  ModelsBuckup:any[]=[]
  @Input()
  actualsection=''
  constructor(private ProductService:ProductsService ){
  }
  ngOnInit(){
    this.ProductService.getAllBrands().subscribe(res=> this.Brands= res.map(i=>i.Name))
    this.ProductService.getAllModels().subscribe(res=>{
     this.Models= res.filter(i=>i.Product.Name===this.actualsection);
     this.ModelsBuckup=res.filter(i=>i.Product.Name===this.actualsection)
    })
  }

  @Output()Filters= new EventEmitter<string>()
  FilterByBrands(e:Event){
    console.log('bybrandoutput');
    
    let actualvalue=(<HTMLButtonElement>e.target).value
    this.Filters.emit(actualvalue);
    this.Models= actualvalue==='all'?this.ModelsBuckup:
                 this.ModelsBuckup.filter(i=>i.Product.Brand.Name===actualvalue)
     
  }

  @Output()Filterbymodel= new EventEmitter<string>()
  FilterByModels(e:Event){
    console.log('Bymodeloutput')
    let actualvalue=(<HTMLButtonElement>e.target).value
    this.Filterbymodel.emit(actualvalue)
    this.Models=actualvalue==='all'?this.ModelsBuckup:this.Models
  }

}
