import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-id-verification',
  templateUrl: './id-verification.component.html',
  styleUrls: ['./id-verification.component.scss']
})
export class IdVerificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  urlFront: string="";
  urlBack: string="";
  urlSelfie: string="";

  onSelectedFileF(event){
    if(event.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(event)=>{
        this.urlFront=event.target.result as string; 
      }
    }
  }
  onSelectedFileB(event){
    if(event.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(event)=>{
        this.urlBack=event.target.result as string; 
      }
    }
  }
  onSelectedFileSelfie(event){
    if(event.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(event)=>{
        this.urlSelfie=event.target.result as string; 
      }
    }
  }

}
