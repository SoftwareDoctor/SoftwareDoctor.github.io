import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly router = inject(Router);

  constructor() {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      const bodyClass = this.getDeepestBodyClass() ?? 'homepage';
      
      // Preserviamo eventuali classi aggiunte da scripts esterni (es. is-touch, is-mobile di browser.js)
      // ma rimuoviamo quelle di layout gestite da noi
      const currentClasses = Array.from(document.body.classList);
      const layoutClasses = ['homepage', 'no-sidebar', 'left-sidebar', 'right-sidebar', 'page-consulenza'];
      
      const classesToKeep = currentClasses.filter(c => !layoutClasses.includes(c) && c !== 'is-preload');
      
      document.body.className = [...classesToKeep, ...bodyClass.split(' '), 'is-preload'].join(' ');
      
      window.setTimeout(() => document.body.classList.remove('is-preload'), 100);
    });
  }

  private getDeepestBodyClass(): string | undefined {
    let route = this.router.routerState.snapshot.root;
    while (route.firstChild) route = route.firstChild;
    return route.data?.['bodyClass'];
  }
}
