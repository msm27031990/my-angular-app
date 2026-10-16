import { Routes } from '@angular/router';
import { Profile } from './profile/profile'; // Import if needed, though we will group features

export const routes: Routes = [
  // 1. Redirect empty URL (http://localhost:4200) straight to /home
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // 2. Define our page routes
  { path: 'home', loadComponent: () => import('./home/home').then(m => m.Home) },
  { path: 'weather', loadComponent: () => import('./weather/weather').then(m => m.Weather) },
  { path: 'products', loadComponent: () => import('./products/products').then(m => m.Products) }
];
