import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imageUrl: string="";

  onSelectedFile(event){
    if (event.target.files && event.target.files[0]){
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload=(event)=>{
        this.imageUrl=event.target.result;
      }
    }
  }

}
