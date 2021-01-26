import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'news',
    loadChildren: async() => (await import('./news/news.module')).NewsModule,
  },
  { path: '**', redirectTo: 'news/newest', pathMatch: 'full' },
];
