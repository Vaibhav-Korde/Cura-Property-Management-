import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PropertyManagementComponent } from './pages/property-management/PropertyManagementComponent';


export const routes: Routes = [

  //  {
  //   path: '',
  //   redirectTo: 'about',
  //   pathMatch: 'full'
  // },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'property-management',
    component: PropertyManagementComponent
  }
];