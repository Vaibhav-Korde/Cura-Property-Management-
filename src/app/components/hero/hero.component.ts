// src/app/components/hero/hero.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { InquiryService } from '../../services/inquiry.service';

interface TrustBadge { icon: string; text: string; }
interface QuickForm   { name: string; email: string; phone: string; service: string; }

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  trustBadges: TrustBadge[] = [
    { icon: '✅', text: '14+ Years Experience' },
    { icon: '🌍', text: 'Clients in 20+ Countries' },
    { icon: '⭐', text: '100+  (5-Star Reviews)' },
    { icon: '🏘', text: '15000+ Properties Managed' },
  ];

  quickForm: QuickForm = { name: '', email: '', phone: '', service: '' };

  constructor(
    private inquiryService: InquiryService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  /*submitQuickInquiry(): void {
    if (!this.quickForm.name || !this.quickForm.email || !this.quickForm.phone) {
      alert('Please fill in all fields.');
      return;
    }
    // Navigate to full inquiry section with pre-filled data
    document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' });
  }*/

  scrollToInquiry() {
  document.getElementById('inquiry')?.scrollIntoView({
  behavior: 'smooth'
  });
}
}
