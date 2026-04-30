import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BLOG_POSTS, BlogCategory, BlogPost } from './blog.data';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog.page.html',
})
export class BlogPage {
  protected readonly itemsPerPage = 4;
  protected page = 1;
  protected category: BlogCategory = 'all';
  protected search = '';

  protected readonly posts: BlogPost[] = BLOG_POSTS;

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
        q.length === 0 ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
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
