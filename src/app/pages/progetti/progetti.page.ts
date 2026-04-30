import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

type Project = {
  title: string;
  image: string;
  alt: string;
  description: string;
  cta: string;
  link?: string;
};

@Component({
  selector: 'app-progetti-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './progetti.page.html',
})
export class ProgettiPage {
  protected readonly projects: Project[] = [
    {
      title: 'Demo: Benessere Psicologico',
      image: '/images/pic01.jpg',
      alt: 'E-learning Benessere Psicologico',
      description: 'Progetto interattivo focalizzato sulla salute mentale e strategie di coping.',
      cta: 'Guarda Demo',
      link: '#',
    },
    {
      title: 'Mobile-First: Sicurezza',
      image: '/images/pic02.jpg',
      alt: 'E-learning Mobile-First Sicurezza',
      description: 'Modulo e-learning ottimizzato per smartphone sulla sicurezza sul lavoro.',
      cta: 'Scopri di più',
      link: '#',
    },
    // {
    //   title: 'Sales Training Gamificato',
    //   image: '/images/pic03.jpg',
    //   alt: 'Sales Training Gamificato',
    //   description: 'Percorso formativo per la forza vendita che utilizza elementi di gamification.',
    //   cta: 'Dettagli Progetto',
    //   link: '#',
    // },
    // {
    //   title: 'Design Cognitivo',
    //   image: '/images/pic09.jpg',
    //   alt: "Design Cognitivo e Carico Cognitivo",
    //   description: "Ottimizzazione dell'interfaccia basata sui principi del carico cognitivo.",
    //   cta: 'Leggi Case Study',
    //   link: '#',
    // },
  ];

  protected readonly itemsPerPage = 2;
  protected page = 1;

  protected get totalPages(): number {
    return Math.max(1, Math.ceil(this.projects.length / this.itemsPerPage));
  }

  protected get pagedProjects(): Project[] {
    const start = (this.page - 1) * this.itemsPerPage;
    return this.projects.slice(start, start + this.itemsPerPage);
  }

  protected pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  protected setPage(p: number): void {
    this.page = Math.min(this.totalPages, Math.max(1, p));
    document.getElementById('main')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

