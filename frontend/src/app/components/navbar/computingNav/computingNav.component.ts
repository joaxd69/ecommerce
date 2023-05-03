import { Component, Input } from '@angular/core';
import { BrandApi } from 'src/app/interfaces/Interfaces';

@Component({
  selector: 'app-computing',
  templateUrl: './computingNav.component.html',
  styleUrls: ['./computingNav.component.css']
})
export class ComputingComponent {
  @Input()
  Brands:BrandApi[]=[]

  reloadPage(): void {
   setTimeout(() => {
      window.location.reload();
   }, 1);
  }
}
