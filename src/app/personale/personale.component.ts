import { Component } from '@angular/core';
import { GestoreService } from '../gestore.service';

@Component({
  selector: 'app-personale',
  templateUrl: './personale.component.html',
  styleUrls: ['./personale.component.css']
})
export class PersonaleComponent {
  nome:string = "";
  cognome:string = "";
  email:string = "";
  telefono:string = "";
  idacquario:number = 1;
  constructor(public gestore:GestoreService){}
}
