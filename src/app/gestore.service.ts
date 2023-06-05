import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GestoreService {
  acquari:{ID:number, Nome:string}[] = [];
  personale:{ID:number, Nome:string, Cognome:string, Email:string, Telefono:string, IDAcquario:number}[] = [];
  interventi:{ID:number, DataOra:string, Nota:string, Report:string}[] = [];
  isemplice:{IDIntervento:number, IDPersonale:number}[] = [];

  constructor(private http:HttpClient) {
    this.getAcquari();
    this.getPersonale();
    this.getInterventi();
    this.getISemplice();
  }

  getAcquari():any {
    this.http.get<any[]>("http://127.0.0.1:8080/acquario").subscribe(
      res => {
        this.acquari = [];
        res.forEach(x => {
          this.acquari.push({ID:x["ID"], Nome:x["Nome"]});
        });
      },
      err => {
        console.log(err);
      }
    );
  }

  getPersonale():any {
    this.http.get<any[]>("http://127.0.0.1:8080/personale").subscribe(
      res => {
        this.personale = [];
        res.forEach(x => {
          this.personale.push({ID:x["ID"], Nome:x["Nome"], Cognome:x["Cognome"], Email:x["Email"], Telefono:x["Telefono"], IDAcquario:x["IDAcquario"]});
        });
      },
      err => {
        console.log(err);
      }
    );
  }

  insertPersonale(nome, cognome, email, telefono, idacquario) {
    this.http.post("http://127.0.0.1:8080", {"tabella":"personale", "nome":nome, "cognome":cognome, "email":email, "telefono":telefono, "idacquario":idacquario}).subscribe(
      res => {
        this.getPersonale();
      },
      err => {
        console.log(err);
      }
    )
  }

  getInterventi():any {
    this.http.get<any[]>("http://127.0.0.1:8080/interventi").subscribe(
      res => {
        res.forEach(x => {
          this.interventi = [];
          this.interventi.push({ID:x["ID"], DataOra:x["DataOra"], Nota:x["Nota"], Report:x["Report"]});
        });
      },
      err => {
        console.log(err);
      }
    );
  }

  insertInterventi(dataora, nota, report) {
    this.http.post("http://127.0.0.1:8080", {"tabella":"interventi", "dataora":dataora, "nota":nota, "report":report}).subscribe(
      res => {
        this.getInterventi();
      },
      err => {
        console.log(err);
      }
    )
  }

  getISemplice():any {
    this.http.get<any[]>("http://127.0.0.1:8080/isemplice").subscribe(
      res => {
        this.isemplice = [];
        res.forEach(x => {
          this.isemplice.push({IDIntervento:x["IDIntervento"], IDPersonale:x["IDPersonale"]});
        });
      },
      err => {
        console.log(err);
      }
    );
  }

  insertISemplice(idintervento, idpersonale) {
    this.http.post("http://127.0.0.1:8080", {"tabella":"isemplice", "idintervento":idintervento, "idpersonale":idpersonale}).subscribe(
      res => {
        this.getISemplice();
      },
      err => {
        console.log(err);
      }
    )
  }
}
