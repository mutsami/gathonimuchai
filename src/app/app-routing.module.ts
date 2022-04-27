import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [{path:"",component:HomeComponent}
,
{
  path: 'about',
  loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
},
{
  path: 'portfolio',
  loadChildren: () => import('./pages/portfolio/portfolio.module').then(m => m.PortfolioModule)
},
{
  path: 'partnership',
  loadChildren: () => import('./pages/partnership/partnership.module').then(m => m.PartnershipModule)
},
{
  path: 'careers',
  loadChildren: () => import('./pages/careers/careers.module').then(m => m.CareersModule)
},
{
  path: 'blog',
  loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule)
},
{
  path: 'contact',
  loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
