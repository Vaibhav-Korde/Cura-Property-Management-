import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PropertyManagementComponent } from './pages/property-management/property-management.component';
import { TestComponent } from './pages/test/test.component';

export const routes: Routes = [

   {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'property-management',
    component: PropertyManagementComponent
  },

 {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }

];