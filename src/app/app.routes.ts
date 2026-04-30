import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
    pathMatch: 'full',
    data: { bodyClass: 'homepage' },
  },
  {
    path: 'consulenza-psicologica',
    loadComponent: () => import('./pages/consulenza/consulenza.page').then((m) => m.ConsulenzaPage),
    data: { bodyClass: 'no-sidebar page-consulenza' },
  },
  {
    path: 'progetti',
    loadComponent: () => import('./pages/progetti/progetti.page').then((m) => m.ProgettiPage),
    data: { bodyClass: 'right-sidebar' },
  },
  {
    path: 'blog',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/blog/blog.page').then((m) => m.BlogPage),
        data: { bodyClass: 'left-sidebar' },
      },
      {
        path: ':slug',
        loadComponent: () => import('./pages/blog/post-detail.page').then((m) => m.PostDetailPage),
        data: { bodyClass: 'no-sidebar' },
      },
    ],
  },
  {
    path: 'chi-sono',
    loadComponent: () => import('./pages/chi-sono/chi-sono.page').then((m) => m.ChiSonoPage),
    data: { bodyClass: 'no-sidebar' },
  },
  {
    path: 'contatti',
    loadComponent: () => import('./pages/contatti/contatti.page').then((m) => m.ContattiPage),
    data: { bodyClass: 'no-sidebar' },
  },
  {
    path: 'privacy',
    loadComponent: () => import('./pages/privacy/privacy.page').then((m) => m.PrivacyPage),
    data: { bodyClass: 'no-sidebar' },
  },
  {
    path: 'cookie',
    loadComponent: () => import('./pages/cookie/cookie.page').then((m) => m.CookiePage),
    data: { bodyClass: 'no-sidebar' },
  },

  // Backward-compatible paths (old static URLs)
  { path: 'index.html', redirectTo: '', pathMatch: 'full' },
  { path: 'consulenza-psicologica.html', redirectTo: 'consulenza-psicologica', pathMatch: 'full' },
  { path: 'progetti.html', redirectTo: 'progetti', pathMatch: 'full' },
  { path: 'blog.html', redirectTo: 'blog', pathMatch: 'full' },
  { path: 'chi-sono.html', redirectTo: 'chi-sono', pathMatch: 'full' },
  { path: 'contatti.html', redirectTo: 'contatti', pathMatch: 'full' },
  { path: 'privacy.html', redirectTo: 'privacy', pathMatch: 'full' },
  { path: 'cookie.html', redirectTo: 'cookie', pathMatch: 'full' },

  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.page').then((m) => m.NotFoundPage),
    data: { bodyClass: 'no-sidebar' },
  },
];
