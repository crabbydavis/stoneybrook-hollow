import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    loadComponent: () => import('./pages/landing/landing.page').then( m => m.LandingPage)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.page').then( m => m.AboutPage)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact-us/contact-us.page').then( m => m.ContactUsPage)
  },
  {
    path: 'faq',
    loadComponent: () => import('./pages/faq/faq.page').then( m => m.FaqPage)
  },
  {
    path: 'learn',
    loadComponent: () => import('./pages/learn/learn.page').then( m => m.LearnPage)
  },
  {
    path: 'classes',
    loadComponent: () => import('./pages/classes/classes.page').then( m => m.ClassesPage)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
