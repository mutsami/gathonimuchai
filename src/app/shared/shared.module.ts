import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module'; 
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe'; 
import { TimeagoModule } from 'ngx-timeago';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SideNavComponent,
    SanitizeHtmlPipe 
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgxSkeletonLoaderModule 
  ],
  exports:[NavbarComponent,FooterComponent,NgxSkeletonLoaderModule,SideNavComponent,SanitizeHtmlPipe,TimeagoModule]
})
export class SharedModule { }
