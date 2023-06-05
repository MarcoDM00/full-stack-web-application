import { Component } from '@angular/core';
import { GestoreService } from '../gestore.service';

@Component({
  selector: 'app-interventi',
  templateUrl: './interventi.component.html',
  styleUrls: ['./interventi.component.css']
})
export class InterventiComponent {
  dataora: string = "";
  nota : string = "";
  report: string = "";

  constructor(public gestore:GestoreService){}

}
