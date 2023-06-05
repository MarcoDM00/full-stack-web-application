import { Component } from '@angular/core';
import { GestoreService } from '../gestore.service';

@Component({
  selector: 'app-isemplice',
  templateUrl: './isemplice.component.html',
  styleUrls: ['./isemplice.component.css']
})
export class IsempliceComponent {
  idintervento: number;
  idpersonale: number;
  constructor(public gestore:GestoreService){}
}
