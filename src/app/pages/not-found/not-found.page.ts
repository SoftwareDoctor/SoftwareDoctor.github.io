import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section id="main">
      <div class="container">
        <article class="box post" style="text-align:center;">
          <header>
            <h2>Pagina non trovata</h2>
            <p>La pagina richiesta non esiste o è stata spostata.</p>
          </header>
          <ul class="actions" style="justify-content:center;">
            <li><a routerLink="/" class="button alt">Torna alla Home</a></li>
          </ul>
        </article>
      </div>
    </section>
  `,
})
export class NotFoundPage {}

