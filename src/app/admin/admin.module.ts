import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BlogEditorComponent } from './blog-editor/blog-editor.component';
import { SharedModule } from '../shared/shared.module';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { BlogEditPageComponent } from './blog-edit-page/blog-edit-page.component';
import { TeamComponent } from './team/team.component';  
import { HttpClientModule } from '@angular/common/http';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { UploadFormComponent } from './team/upload-form/upload-form.component';
import { UploadListComponent } from './team/upload-list/upload-list.component';
import { UploadDetailsComponent } from './team/upload-details/upload-details.component';
import { MemberEditComponent } from './team/member-edit/member-edit.component';
import { CareersComponent } from './careers/careers.component';  
import { CareerEditComponent } from './careers/career-edit/career-edit.component';
import { PartnershipsComponent } from './partnerships/partnerships.component';
import { MessagesComponent } from './messages/messages.component';
import { NotVerifiedComponent } from './signin/not-verified/not-verified.component';   


@NgModule({
  declarations: [
    BlogEditorComponent,
    SigninComponent,
    BlogEditPageComponent,
    TeamComponent,
    UploadFormComponent,
    UploadListComponent,
    UploadDetailsComponent,
    MemberEditComponent,
    CareersComponent, 
    CareerEditComponent, PartnershipsComponent, MessagesComponent, NotVerifiedComponent 
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    AngularEditorModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ], 
})
export class AdminModule { }
