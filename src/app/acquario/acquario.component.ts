import { Component } from '@angular/core';
import { GestoreService } from '../gestore.service';

@Component({
  selector: 'app-acquario',
  templateUrl: './acquario.component.html',
  styleUrls: ['./acquario.component.css']
})
export class AcquarioComponent {
  constructor(public gestore:GestoreService){}
}
