import { Routes } from '@angular/router';
import { AcquarioComponent } from './acquario/acquario.component';
import { InterventiComponent } from './interventi/interventi.component';
import { PersonaleComponent } from './personale/personale.component';
import { IsempliceComponent } from './isemplice/isemplice.component';

export const AppRoutes: Routes = [
  { path: '', component: AcquarioComponent},
  { path: 'personale', component: PersonaleComponent},
  { path: 'interventi', component: InterventiComponent},
  { path: 'isemplice', component: IsempliceComponent}
];