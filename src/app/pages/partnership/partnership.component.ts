import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partnership',
  templateUrl: './partnership.component.html',
  styleUrls: ['./partnership.component.css']
})
export class PartnershipComponent implements OnInit {
  industry = new Array();

  constructor() { }

  ngOnInit() {
  }

  industryclick($event: { target: any; srcElement: any; }){
    
    let temp= $event.srcElement.parentNode;
    for(let i = 0; i < temp.childNodes.length; i++){
      
      if(temp.childNodes[i].nodeName === 'DIV'){
      if(temp.childNodes[i].classList.contains('active')){ 
        const index: number = this.industry.indexOf(temp.childNodes[i].id);
        if (index !== -1) {
          this.industry.splice(index, 1);
      }  

        temp.childNodes[i].classList.remove('active');
        console.log('remove', this.industry) 
      }else{
        this.industry.push(temp.childNodes[i].id)
        $event.srcElement.classList.add('active')
        
        console.log('added', this.industry) 
      }
    }
    }
  } 

}
