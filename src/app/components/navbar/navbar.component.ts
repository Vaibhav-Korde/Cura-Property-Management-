// src/app/components/navbar/navbar.component.ts
import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  menuOpen   = false;

  ngOnInit(): void {}

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 60;
  }

  toggleMenu(): void { this.menuOpen = !this.menuOpen; }
  closeMenu():  void { this.menuOpen = false; }
}
