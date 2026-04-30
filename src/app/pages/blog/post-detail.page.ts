import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BLOG_POSTS, BlogPost } from './blog.data';

@Component({
  selector: 'app-post-detail-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section id="banner" *ngIf="post">
      <header>
        <h2>{{ post.title }}</h2>
        <p>{{ post.category | titlecase }}</p>
      </header>
    </section>

    <section id="main">
      <div class="container">
        <article class="box post" *ngIf="post; else notFound">
          <span class="image featured"><img [src]="post.image" [alt]="post.alt" /></span>

          <div class="row">
            <div class="col-8 col-12-medium">
              <!-- Articolo -->
              <div [innerHTML]="post.content"></div>

              <!-- Call to Action -->
              <div
                class="box cta-box"
                style="margin-top: 3em; padding: 2em; background: #f9f9f9; border-left: 4px solid #4a6670;"
              >
                <h3 style="margin-top: 0;">{{ post.cta.title }}</h3>
                <p>{{ post.cta.text }}</p>
                <a [routerLink]="post.cta.buttonLink" class="button">{{ post.cta.buttonText }}</a>
              </div>

              <!-- Button Torna al blog -->
              <footer style="margin-top: 3em;">
                <a routerLink="/blog" class="button alt">Torna al Blog</a>
              </footer>
            </div>

            <div class="col-4 col-12-medium">
              <!-- Sidebar: Fonti scientifiche -->
              <section class="box">
                <header>
                  <h3>Fonti scientifiche</h3>
                </header>
                <ul class="divided">
                  <li *ngFor="let source of post.sources" [innerHTML]="source"></li>
                </ul>
              </section>

              <!-- Sidebar: Concetti chiave -->
              <section class="box">
                <header>
                  <h3>Concetti chiave</h3>
                </header>
                <ul class="divided">
                  <li *ngFor="let concept of post.keyConcepts">{{ concept }}</li>
                </ul>
              </section>
            </div>
          </div>
        </article>

        <ng-template #notFound>
          <article class="box post">
            <header>
              <h2>Post non trovato</h2>
            </header>
            <p>Spiacenti, il post che stai cercando non esiste.</p>
            <footer>
              <a routerLink="/blog" class="button">Torna al Blog</a>
            </footer>
          </article>
        </ng-template>
      </div>
    </section>
  `,
})

export class PostDetailPage implements OnInit {
  protected post?: BlogPost;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.post = BLOG_POSTS.find((p) => p.slug === slug);
    }
  }
}
