import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-property-management',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl:'./property-management.component.html',
  styleUrl: './property-management.component.css'
})
export class PropertyManagementComponent {

   services = [
    {
      icon:'🏢',
      title:'Property Management',
      description:'Complete end-to-end property management solutions for owners and NRIs.'
    },
    {
      icon:'🔑',
      title:'Tenant Management',
      description:'Verified tenants, rental agreements and complete tenant support.'
    },
    {
      icon:'🛠',
      title:'Repairs & Renovation',
      description:'Professional renovation and maintenance solutions for your property.'
    },
    {
      icon:'📄',
      title:'Legal Documentation',
      description:'Society formalities, agreements and legal documentation support.'
    },
    {
      icon:'📸',
      title:'Property Inspection',
      description:'Regular inspections with updates and transparency.'
    },
    {
      icon:'💰',
      title:'Property Sale',
      description:'Complete assistance for selling residential properties.'
    }
  ];

  features = [
    {
      number:'01',
      title:'Transparency',
      description:'Clear communication and complete visibility throughout the process.'
    },
    {
      number:'02',
      title:'Professional Team',
      description:'Experienced property experts handling every requirement.'
    },
    {
      number:'03',
      title:'Trusted By NRIs',
      description:'Serving clients globally with reliable property solutions.'
    },
    {
      number:'04',
      title:'Stress-Free Service',
      description:'We manage everything while you relax anywhere in the world.'
    }
  ];

}