// src/app/components/about/about.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";

interface Value { icon: string; title: string; desc: string; }

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  values: Value[] = [
    { icon: '🤝', title: 'Complete Transparency',    desc: 'Every rupee accounted for. Monthly statements and real-time updates.' },
    { icon: '⚡', title: 'Prompt & Proactive',       desc: 'We act before you need to ask. Issues resolved before they escalate.' },
    { icon: '⚖️', title: 'Legal Compliance',         desc: 'All rent agreements, society work and documentation fully compliant.' },
    { icon: '🌐', title: 'NRI-Focused Approach',     desc: 'Time zone aware, WhatsApp-friendly, and built for overseas clients.' },
  ];

  scrollToInquiry(): void {
  document.getElementById('inquiry')?.scrollIntoView({
    behavior: 'smooth'
  });
}
}
