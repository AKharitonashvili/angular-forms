import { Routes } from '@angular/router';

export const FORMS_ROUTES: Routes = [
  { path: '', redirectTo: 'control-value-accessors', pathMatch: 'full' },
  {
    path: 'control-value-accessors',
    loadComponent: () =>
      import('./control-value-accessor/control-value-accessor.component').then(
        (m) => m.ControlValueAccessorComponent
      ),
  },
];
