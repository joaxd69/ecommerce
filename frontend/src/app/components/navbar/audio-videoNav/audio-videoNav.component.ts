import { Component, Input } from '@angular/core';
import { BrandApi } from 'src/app/interfaces/Interfaces';

@Component({
  selector: 'app-audio-video',
  templateUrl: './audio-videoNav.component.html',
  styleUrls: ['./audio-videoNav.component.css']
})
export class AudioVideoComponent {
  @Input()
  Brands:BrandApi[]=[]
  
  reloadPage(): void {
    setTimeout(() => {
       window.location.reload();
    }, 1);
  }
  
}
