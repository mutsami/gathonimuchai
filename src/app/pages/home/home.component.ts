import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';   
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CareerFileUploadService } from 'src/app/services/career-file-upload.service';
import { NotificationService } from 'src/app/services/notification.service';

declare var particlesJS: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 stats:any;
 update:any;  
team:any;
 blogs:any;
 form!: FormGroup;
 format: any;
 
  constructor(private viewportScroller: ViewportScroller,private _router: Router,private formBuilder: FormBuilder,private uploadService: CareerFileUploadService,public auth:AuthService,private notifyService : NotificationService) { 
    this.auth.getFirstBlogs().subscribe(e=>{
      this.blogs = e;
    });
    this.auth.getMembers().subscribe(e=>{
      this.team = e;
    })
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]) ,
      uploaded: new FormControl('') 
    });
   }


 
  ngOnInit() {
    
  }
     
  scroll(el: HTMLElement) {
    el.scrollIntoView();
}

  get f(){
    return this.form.controls;
  }
  
  submit(){
    this.form.patchValue({
      uploaded: this.auth.ts
    });
    this.auth.createMailList(this.form.value).then(()=>{

      this._router.routeReuseStrategy.shouldReuseRoute = () => false;
      this._router.onSameUrlNavigation = 'reload';
      this._router.navigate(['/']).then(()=>{ 
        this.notifyService.showInfo("Your email has been received.", "Thank you!!")
    })
    })
  }
  
  public onClick(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
  } 
}
