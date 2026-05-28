// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { StatsComponent } from './components/stats/stats.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { InquiryComponent } from './components/inquiry/inquiry.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComparisonComponent } from './components/comparison/comparison.component';
import { RouterModule, RouterOutlet } from "@angular/router";
import { PropertyManagementComponent } from "./pages/property-management/property-management.component";
import { TestComponent } from "./pages/test/test.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    RouterOutlet,
    HeroComponent,
    ServicesComponent,
    ComparisonComponent,
    AboutComponent,
    StatsComponent,
    TestimonialsComponent,
    InquiryComponent,
    GalleryComponent,
    FooterComponent,
    RouterModule,
    PropertyManagementComponent,
    TestComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cura-nri-property-services';
}
