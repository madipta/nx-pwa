import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '', 
    pathMatch: 'full',
    loadChildren: async () => (await import('./news/news.module')).NewsModule,
  },
  {
    path: 'news',
    children: [
      {
        path: 'item/:id',
        loadChildren: async () => (await import('./news/news-detail/news-detail.module')).NewsDetailModule,
      },
      {
        path: ':select',
        loadChildren: async () => (await import('./news/news.module')).NewsModule,
      },
    ],
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
