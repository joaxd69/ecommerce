import { Component ,Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sections-titles',
  templateUrl: './sections-titles.component.html',
  styleUrls: ['./sections-titles.component.css']
})
export class SectionsTitlesComponent {
  @Input()
  Title: string=''
  @Input()
  TotalProducts:number|string=''
  SelecActual=''
  vervalor(e:Event){
    this.SelecActual=(<HTMLSelectElement>e.target).value
  }
  @Output() Filters= new EventEmitter<string>();///cuando utilizemos el componentes le pasamos  un funcion a la propiedad Filters
  FilterProducts(e:Event) {///representa una funcion que sera cambiada desde donde se invoque al componente
   
    this.Filters.emit((<HTMLSelectElement>e.target).value);
   
  }
}
