import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'news',
    children: [
      {
        path: 'item/:id',
        loadChildren: async() => (await import('./news/news-detail/news-detail.module')).NewsDetailModule,
      },
      {
        path: ':select',
        loadChildren: async() => (await import('./news/news.module')).NewsModule,
      },
    ],
  },
  { path: '**', redirectTo: '/news/newest', pathMatch: 'full' },
];
