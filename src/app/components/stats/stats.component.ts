// src/app/components/stats/stats.component.ts
import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stat {
  icon: string;
  value: number;
  display: string;
  label: string;
  sub: string;
}

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})
export class StatsComponent implements AfterViewInit {
  @ViewChildren('statNumber') statNumbers!: QueryList<ElementRef>;

  stats: Stat[] = [
    { icon: '👥', value: 500,  display: '500+',  label: 'Happy NRI Clients',   sub: 'Across 20+ countries'         },
    { icon: '🏘',  value: 15000, display: '1000+', label: 'Properties Managed',  sub: 'Residential & Commercial'     },
    { icon: '🌍', value: 20,   display: '20+',   label: 'Countries Served',    sub: 'USA, UAE, UK, SG & more'      },
    { icon: '⭐', value: 14,   display: '14+',   label: 'Years of Excellence', sub: 'Since 2010, Pune based'       },
  ];

  ngAfterViewInit(): void {
    this.observeAndAnimate();
  }

  private observeAndAnimate(): void {
    const section = document.getElementById('stats');
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(section);
  }

  private animateCounters(): void {
    const elements = document.querySelectorAll<HTMLElement>('.stats__number');
    elements.forEach((el) => {
      const target   = parseInt(el.getAttribute('data-target') || '0', 10);
      const suffix   = el.textContent?.replace(/\d+/, '') ?? '';
      const duration = 1800;
      let start: number | null = null;

      const step = (ts: number) => {
        if (!start) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        const eased    = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }
}
