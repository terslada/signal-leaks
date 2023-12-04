import { Routes } from '@angular/router';
import { DefaultComponent, RoutedComponent } from "./app.component";

export const routes: Routes = [
  {
    path: 'routed',
    component: RoutedComponent,
  },
  {
    path: '',
    component: DefaultComponent,
  }
];
