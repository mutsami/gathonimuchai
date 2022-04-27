import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  careers:any;
  
   constructor(public auth:AuthService) {
     this.auth.getCareers().subscribe(e=>{
       this.careers = e;
     })
    }

    ngOnInit(): void {
        
    }

    getDept(dept:any) :string{ 
      dept;
      console.log('dept',dept)
     if (dept == '1') {
       dept = 'Sales'
     } else if (dept == '2'){
       dept =  'IT'
     } else if (dept == '3'){
       dept =  'Marketing'
     } else if (dept == '4'){
       dept =  'Finance'
     } else if (dept == '5'){
       dept =  'Human resource'
     } else if (dept == '6'){
       dept =  'Engineering'
     } else if (dept == '7'){
       dept =  'Other'
     }
     return dept;
   }
  

}
