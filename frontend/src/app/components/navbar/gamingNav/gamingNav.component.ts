import { Component } from '@angular/core';

@Component({
  selector: 'app-gaming',
  templateUrl: './gamingNav.component.html',
  styleUrls: ['./gamingNav.component.css']
})
export class GamingComponent {
  reloadPage(): void {
    setTimeout(() => {
       window.location.reload();
    }, 1);
   }
}
