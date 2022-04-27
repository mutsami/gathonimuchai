import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';   

declare var particlesJS: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
/* ---- stats.js config ---- */

 count_particles:any;
 stats:any;
 update:any;  
 
  constructor(private viewportScroller: ViewportScroller) { 
    
   }
 
  ngOnInit() {
    
  }
  

  public onClick(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
  }

  

    

    



 
}
