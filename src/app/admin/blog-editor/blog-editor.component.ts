import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument , AngularFirestore} from '@angular/fire/compat/firestore'; 
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service'; 
import { threadId } from 'worker_threads';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-blog-editor',
  templateUrl: './blog-editor.component.html',
  styleUrls: ['./blog-editor.component.css']
})
export class BlogEditorComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  blogs!:any[]; 

  constructor(private formBuilder: FormBuilder,public auth:AuthService,private _router: Router,private notifyService : NotificationService) {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      cover_image: new FormControl('', [Validators.required, Validators.minLength(3)]),
      category: new FormControl('', [Validators.required, Validators.minLength(3)]), 
      uploaded: new FormControl(''), 
      description: new FormControl('', [Validators.required ]) ,
      htmlContent: new FormControl('')
    });
    this.auth.getBlogs().subscribe(e=>{
      this.blogs = e;
    }) 
  }
  ngOnInit(){ 
  }


  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    this.form.patchValue({
      uploaded: this.auth.ts 
    });
    this.auth.createBlog(this.form.value).then(()=>{

      this._router.routeReuseStrategy.shouldReuseRoute = () => false;
      this._router.onSameUrlNavigation = 'reload';
      this._router.navigate(['admin/blog']).then(()=>{ 
        this.notifyService.showSuccess("The blog has been created succefully.", "Saved!!")
    })
    })
  }

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    width:'900px',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

}
