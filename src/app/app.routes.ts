import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  {
    path: 'posts',
    loadChildren: () =>
      import('./pages/posts/posts.routes').then((m) => m.POSTS_ROUTES),
  },
];
