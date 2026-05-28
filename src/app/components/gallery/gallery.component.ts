// src/app/components/gallery/gallery.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryItem { key: string; label: string; icon: string; color: string; year: string; }
interface Tab         { key: string; label: string; }

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  activeTab    = 'all';
  lightboxItem: GalleryItem | null = null;

  tabs: Tab[] = [
    { key: 'all',        label: 'All' },
    { key: 'awards',     label: 'Awards & Recognition' },
    { key: 'events',     label: 'Events' },
    { key: 'magazine',   label: 'Magazine Features' },
    { key: 'milestones', label: 'Milestones' },
  ];

  allItems: GalleryItem[] = [
    { key: 'awards',     label: 'Best NRI Property Manager 2023',   icon: '🏆', color: 'linear-gradient(135deg,#C9A84C,#9A7835)', year: '2023' },
    { key: 'awards',     label: 'Excellence in Real Estate Award',   icon: '🥇', color: 'linear-gradient(135deg,#1E3450,#0D1B2A)', year: '2022' },
    { key: 'magazine',   label: 'Times of India Feature',            icon: '📰', color: 'linear-gradient(135deg,#2d6a4f,#1b4332)', year: '2023' },
    { key: 'events',     label: 'NRI Connect Summit 2023',           icon: '🎤', color: 'linear-gradient(135deg,#6a1b4d,#4a1040)', year: '2023' },
    { key: 'milestones', label: 'Celebrating 14+ Years',             icon: '🎉', color: 'linear-gradient(135deg,#C9A84C,#E8CC88)', year: '2024' },
    { key: 'magazine',   label: 'Property Plus Magazine Cover',      icon: '📖', color: 'linear-gradient(135deg,#0D1B2A,#162637)', year: '2022' },
    { key: 'events',     label: 'Pune Property Expo 2022',           icon: '🏙',  color: 'linear-gradient(135deg,#1a5276,#0d1b2a)', year: '2022' },
    { key: 'awards',     label: 'Top Property Manager – Pune 2021',  icon: '⭐', color: 'linear-gradient(135deg,#784212,#4a2800)', year: '2021' },
    { key: 'milestones', label: '500 Clients Milestone',             icon: '👥', color: 'linear-gradient(135deg,#1e8449,#0b5329)', year: '2021' },
    { key: 'events',     label: 'Global NRI Property Forum',         icon: '🌍', color: 'linear-gradient(135deg,#1a237e,#0d1b6e)', year: '2020' },
    { key: 'magazine',   label: 'Deccan Chronicle Feature',          icon: '📋', color: 'linear-gradient(135deg,#6d4c41,#3e2723)', year: '2020' },
    { key: 'milestones', label: '10 Years Anniversary Celebration',  icon: '🎂', color: 'linear-gradient(135deg,#ad1457,#880e4f)', year: '2020' },
  ];

  get filteredItems(): GalleryItem[] {
    return this.activeTab === 'all'
      ? this.allItems
      : this.allItems.filter(i => i.key === this.activeTab);
  }

  setTab(key: string): void { this.activeTab = key; }
  openLightbox(item: GalleryItem): void { this.lightboxItem = item; }
  closeLightbox(): void { this.lightboxItem = null; }
}
