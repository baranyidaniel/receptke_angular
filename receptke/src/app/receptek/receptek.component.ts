import { Component } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-receptek',
  templateUrl: './receptek.component.html',
  styleUrls: ['./receptek.component.css']
})
export class ReceptekComponent {
  recepts: any;

  constructor(private httpService: HttpService) { }
 
  ngOnInit() {
    this.httpService.getRecepts().subscribe(
    (response) => { this.recepts = response; },
    (error) => { console.log(error); });
  }
}
