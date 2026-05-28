// src/app/components/testimonials/testimonials.component.ts
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial { name: string; location: string; text: string; }

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  activeIndex  = 0;
  visibleCount = 3;
  autoplayTimer: any;

  testimonials: Testimonial[] = [
    {
      name: 'Anup Gadodia', location: 'USA',
      text: 'CURA\'s outstanding property management and seamless execution of all real estate transactions is truly commendable. Their dedication and keen attention to detail in managing my properties have been exceptional, ensuring their upkeep and smooth operations.',
    },
    {
      name: 'Ashok Kumar Pandey', location: 'USA',
      text: 'Cura has been managing our fully furnished Villa and we are extremely satisfied with their professionalism, honesty and customer service. It has been a great pleasure working with Dipty and her hardworking team.',
    },
    {
      name: 'Anita Kale', location: 'Singapore',
      text: 'Cura helped me manage my property in Pune for 5 years and it\'s all praises. From finding a tenant to arranging repairs — everything was done very swiftly. Very easy communication, prompt service. Worth every penny.',
    },
    {
      name: 'Sanjay Nadkarni', location: 'UAE',
      text: 'Have been a Cura customer for 15+ years, availing their full spectrum of services. The team is uber-professional and proactive. Hassle-free real estate transactions in India may sound like an oxymoron, but Cura makes it possible!',
    },
    {
      name: 'Subir Biswas', location: 'Australia',
      text: 'Excellent end-to-end service in property management and sale of our property. Outstanding in finding tenants, managing from a rental/maintenance perspective, and coordinating with CA, Advocate, Bank, Society for a seamless process.',
    },
    {
      name: 'Prakash Indulkar', location: 'Canada',
      text: 'After long trials with various property management services, I concluded there is NO MATCH to CURA. By giving your property to CURA you will save a lot of time, money and hardship. Without hesitation I recommend CURA for peace of mind.',
    },
  ];

  ngOnInit(): void {
    this.updateVisibleCount();
    this.startAutoplay();
  }

  ngOnDestroy(): void { clearInterval(this.autoplayTimer); }

  @HostListener('window:resize')
  onResize(): void { this.updateVisibleCount(); }

  private updateVisibleCount(): void {
    const w = window.innerWidth;
    this.visibleCount = w < 640 ? 1 : w < 1024 ? 2 : 3;
    if (this.activeIndex > this.testimonials.length - this.visibleCount) {
      this.activeIndex = 0;
    }
  }

  private startAutoplay(): void {
    this.autoplayTimer = setInterval(() => this.next(), 5000);
  }

  next(): void {
    if (this.activeIndex < this.testimonials.length - this.visibleCount) {
      this.activeIndex++;
    } else {
      this.activeIndex = 0;
    }
  }

  prev(): void {
    if (this.activeIndex > 0) this.activeIndex--;
  }

  goTo(i: number): void { this.activeIndex = i; }
}
