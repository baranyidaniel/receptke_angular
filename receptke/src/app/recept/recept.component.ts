import { Component, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-recept',
  templateUrl: './recept.component.html',
  styleUrls: ['./recept.component.css']
})
export class ReceptComponent {
  @Input() recept: any;

  constructor(private httpService: HttpService) { }
}
