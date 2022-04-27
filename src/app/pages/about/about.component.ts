import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  team:any;
  directors:any;
  constructor(public auth:AuthService) {
    
    this.auth.getManagementMembers().subscribe(e=>{
      this.team = e;
    });
    this.auth.getDirectorsMembers().subscribe(e=>{
      this.directors = e;
    })
    
   }

  ngOnInit() {
  }

}
