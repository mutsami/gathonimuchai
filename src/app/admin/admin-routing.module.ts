import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
import { PartnershipsComponent } from './partnerships/partnerships.component';
import { BlogEditPageComponent } from './blog-edit-page/blog-edit-page.component';
import { BlogEditorComponent } from './blog-editor/blog-editor.component';
import { CareerEditComponent } from './careers/career-edit/career-edit.component';
import { CareersComponent } from './careers/careers.component';
import { SigninComponent } from './signin/signin.component'; 
import { MemberEditComponent } from './team/member-edit/member-edit.component';
import { TeamComponent } from './team/team.component';
import { MessagesComponent } from './messages/messages.component';
import { NotVerifiedComponent } from './signin/not-verified/not-verified.component';
import { AuthguardGuard } from '../services/authguard.guard';

const routes: Routes = [
{
  path:"",component:SigninComponent
},
{path:"message",component:MessagesComponent,
canActivate: [AuthguardGuard] },
{path:"not-verified",component:NotVerifiedComponent,
canActivate: [AuthguardGuard] },
{path:"blog",component:BlogEditorComponent,
canActivate: [AuthguardGuard] },
{path:"edit_blog/:id",component:BlogEditPageComponent ,
canActivate: [AuthguardGuard]},
{path:"team",component:TeamComponent,
canActivate: [AuthguardGuard] },
{path:"team/:id",component:MemberEditComponent,
canActivate: [AuthguardGuard] },
{path:"careers",component:CareersComponent,
canActivate: [AuthguardGuard] },
{path:"careers/:id",component:CareerEditComponent,
canActivate: [AuthguardGuard] },
{path:"partnerships",component:PartnershipsComponent,
canActivate: [AuthguardGuard] }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
