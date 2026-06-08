import { Component } from '@angular/core';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { HeroComponent } from "../components/hero/hero.component";
import { AboutComponent } from "../components/about/about.component";
import { ServicesComponent } from "../components/services/services.component";
import { ComparisonComponent } from "../components/comparison/comparison.component";
import { StatsComponent } from "../components/stats/stats.component";
import { TestimonialsComponent } from "../components/testimonials/testimonials.component";
import { InquiryComponent } from "../components/inquiry/inquiry.component";
import { GalleryComponent } from "../components/gallery/gallery.component";
import { FooterComponent } from "../components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, AboutComponent, ServicesComponent, ComparisonComponent, StatsComponent, TestimonialsComponent, InquiryComponent, GalleryComponent, FooterComponent],
  templateUrl:'./home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  

}
