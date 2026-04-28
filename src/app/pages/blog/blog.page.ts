import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type BlogCategory = 'all' | 'hr' | 'ai' | 'psicologia' | 'id' | 'formazione';

type BlogPost = {
  title: string;
  image: string;
  alt: string;
  description: string;
  category: Exclude<BlogCategory, 'all'>;
  link?: string;
};

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.page.html',
})
export class BlogPage {
  protected readonly itemsPerPage = 4;
  protected page = 1;
  protected category: BlogCategory = 'all';
  protected search = '';

  protected readonly posts: BlogPost[] = [
    {
      title: "Il futuro dell'HR nel Digital Learning",
      image: '/images/pic04.jpg',
      alt: 'Rappresentazione del futuro HR nel digital learning',
      description: 'Esploriamo come le direzioni HR adottano nuove tecnologie per la formazione.',
      category: 'hr',
      link: '#',
    },
    {
      title: 'AI e Personalizzazione Didattica',
      image: '/images/pic05.jpg',
      alt: "Illustrazione dell'intelligenza artificiale applicata alla didattica",
      description: "L'intelligenza artificiale sta cambiando il modo in cui progettiamo i percorsi.",
      category: 'ai',
      link: '#',
    },
    // {
    //   title: "Psicologia dell'Apprendimento Adulto",
    //   image: '/images/pic06.jpg',
    //   alt: "Concetti di andragogia e psicologia dell'apprendimento",
    //   description: "I principi dell'andragogia per creare corsi e-learning realmente efficaci.",
    //   category: 'psicologia',
    //   link: '#',
    // },
    // {
    //   title: 'Gamification: Oltre il Punteggio',
    //   image: '/images/pic07.jpg',
    //   alt: 'Elementi di gamification per la formazione',
    //   description: 'Come le meccaniche di gioco influenzano la motivazione intrinseca.',
    //   category: 'hr',
    //   link: '#',
    // },
    // {
    //   title: 'Microlearning per la Forza Vendita',
    //   image: '/images/pic08.jpg',
    //   alt: 'Smartphone con contenuti di microlearning',
    //   description: 'Pillole formative veloci ed efficaci per supportare i venditori sul campo.',
    //   category: 'ai',
    //   link: '#',
    // },
    // {
    //   title: 'Design Cognitivo e Carico Mentale',
    //   image: '/images/pic09.jpg',
    //   alt: 'Rappresentazione del carico cognitivo nel design',
    //   description: "Ottimizzare l'interfaccia per favorire l'apprendimento senza sovraccarichi.",
    //   category: 'psicologia',
    //   link: '#',
    // },
  ];

  protected setCategory(c: BlogCategory): void {
    this.category = c;
    this.page = 1;
  }

  protected setSearch(value: string): void {
    this.search = value;
    this.page = 1;
  }

  protected get filteredPosts(): BlogPost[] {
    const q = this.search.trim().toLowerCase();
    return this.posts.filter((p) => {
      const categoryOk = this.category === 'all' || p.category === this.category;
      const searchOk =
        q.length === 0 || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
      return categoryOk && searchOk;
    });
  }

  protected get totalPages(): number {
    return Math.max(1, Math.ceil(this.filteredPosts.length / this.itemsPerPage));
  }

  protected get pagedPosts(): BlogPost[] {
    const start = (this.page - 1) * this.itemsPerPage;
    return this.filteredPosts.slice(start, start + this.itemsPerPage);
  }

  protected pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  protected setPage(p: number): void {
    this.page = Math.min(this.totalPages, Math.max(1, p));
    document.getElementById('main')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

