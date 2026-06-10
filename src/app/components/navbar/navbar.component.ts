// src/app/components/navbar/navbar.component.ts
import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';




@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  isScrolled = false;
  menuOpen = false;

  ngOnInit(): void { }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 60;
  }

  toggleMenu(): void { this.menuOpen = !this.menuOpen; }
  closeMenu(): void { this.menuOpen = false; }

  scrollToSection(sectionId: string): void {

    const element = document.getElementById(sectionId);

    if (element) {

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

    }
  }

  navigateToSection(sectionId: string): void {

    if (this.router.url !== '/') {

      this.router.navigate(['/']).then(() => {

        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 300);

      });

    } else {

      document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

    }
  }

  scrollToInquiry(): void {

    if (this.router.url !== '/') {

      this.router.navigate(['/']).then(() => {

        setTimeout(() => {
          document.getElementById('inquiry')?.scrollIntoView({
            behavior: 'smooth'
          });
        }, 300);

      });

    } else {

      document.getElementById('inquiry')?.scrollIntoView({
        behavior: 'smooth'
      });

    }
  }
}


