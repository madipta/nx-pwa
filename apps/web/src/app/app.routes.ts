import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'news',
    loadChildren: async() => (await import('./news/news.module')).NewsModule,
  },
  {
    path: 'jobs',
    loadChildren: async() => (await import('./jobs/jobs.module')).JobsModule,
  },
  { path: '**', redirectTo: 'news/newest', pathMatch: 'full' },
];
