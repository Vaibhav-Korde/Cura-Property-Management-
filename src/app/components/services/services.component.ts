// src/app/components/services/services.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  bgColor: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  servicesList: Service[] = [
    {
      icon: '🏘',
      title: 'Property Management',
      description: 'Complete end-to-end rental management — from tenant onboarding to rent collection and maintenance.',
      bgColor: 'rgba(201,168,76,0.1)',
      features: [
        'Tenant screening & onboarding',
        'Rent collection & disbursement',
        'Maintenance & repairs coordination',
        'Monthly reporting to owner',
      ],
    },
    {
      icon: '🔍',
      title: 'Tenant Search',
      description: 'Find verified, suitable tenants for your property quickly with thorough background checks.',
      bgColor: 'rgba(13,27,42,0.06)',
      features: [
        'Background & reference verification',
        'Legal rental agreement drafting',
        'Police verification assistance',
        'Seamless handover process',
      ],
    },
    {
      icon: '🔎',
      title: 'Property Inspection',
      description: 'Detailed property inspection with photo documentation and condition reports sent to you online.',
      bgColor: 'rgba(201,168,76,0.1)',
      features: [
        'Scheduled & surprise inspections',
        'Photographic condition report',
        'Structural & fixture assessment',
        'Society compliance check',
      ],
    },
    {
      icon: '🔨',
      title: 'Renovation & Restoration',
      description: 'Transform or restore your property with our trusted network of contractors and interior experts.',
      bgColor: 'rgba(13,27,42,0.06)',
      features: [
        'Civil & interior renovation',
        'Electrical & plumbing work',
        'Painting & waterproofing',
        'Budget estimation & tracking',
      ],
    },
    {
      icon: '📋',
      title: 'Property Sale',
      description: 'Complete assistance in selling your property at the best market price with legal compliance.',
      bgColor: 'rgba(201,168,76,0.1)',
      features: [
        'Market valuation & pricing',
        'Buyer sourcing & negotiation',
        'Documentation & registration',
        'CA & legal coordination',
      ],
    },
    {
      icon: '⚖️',
      title: 'Legal & Society Formalities',
      description: 'Name transfers, NOCs, society dues clearance and all paperwork — handled completely on your behalf.',
      bgColor: 'rgba(13,27,42,0.06)',
      features: [
        'Property name transfers',
        'NOC & mutation assistance',
        'Society due clearance',
        'Power of attorney guidance',
      ],
    },
  ];
}
