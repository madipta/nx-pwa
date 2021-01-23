import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'show',
    loadChildren: async() => (await import('./show/show.module')).ShowModule,
  },
  {
    path: 'ask',
    loadChildren: async() => (await import('./ask/ask.module')).AskModule,
  },
  {
    path: 'jobs',
    loadChildren: async() => (await import('./jobs/jobs.module')).JobsModule,
  },
  {
    path: 'news',
    loadChildren: async() => (await import('./news/news.module')).NewsModule,
  },
  {
    path: 'top',
    loadChildren: async() => (await import('./top/top.module')).TopModule,
  },
  { path: '**', redirectTo: 'news', pathMatch: 'full' },
];
