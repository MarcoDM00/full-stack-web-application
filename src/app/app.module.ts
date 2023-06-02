import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './routes';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AcquarioComponent } from './acquario/acquario.component';
import { PersonaleComponent } from './personale/personale.component';
import { InterventiComponent } from './interventi/interventi.component';
import { IsempliceComponent } from './isemplice/isemplice.component';

@NgModule({
  declarations: [
    AppComponent,
    AcquarioComponent,
    PersonaleComponent,
    InterventiComponent,
    IsempliceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
