import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-sections-titles',
  templateUrl: './sections-titles.component.html',
  styleUrls: ['./sections-titles.component.css']
})
export class SectionsTitlesComponent {
  @Input()
  Title: string=''
}
