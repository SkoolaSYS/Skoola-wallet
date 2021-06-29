import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-id-verification',
  templateUrl: './id-verification.component.html',
  styleUrls: ['./id-verification.component.scss']
})
export class IdVerificationComponent implements OnInit {
  public idVerifyNo: string = "";
  private files: File[] = new Array(3);

  constructor(private services: Services, private router: Router, private ngPopups: NgPopupsService) { }

  ngOnInit(): void {
  }

  urlFront: string="";
  urlBack: string="";
  urlSelfie: string="";

  onSelectedFileF(event){
    if(event.target.files){
      var reader = new FileReader();
      reader.onload=(event)=>{
        this.urlFront=event.target.result as string; 
      }

      reader.readAsDataURL(event.target.files[0]);
      this.files[0] = event.target.files[0];
    }
  }

  onSelectedFileB(event){
    if(event.target.files){
      var reader = new FileReader();
      reader.onload=(event)=>{
        this.urlBack=event.target.result as string; 
      }

      reader.readAsDataURL(event.target.files[0]);
      this.files[1] = event.target.files[0];
    }
  }

  onSelectedFileSelfie(event){
    if(event.target.files){
      var reader = new FileReader();
      reader.onload=(event)=>{
        this.urlSelfie=event.target.result as string; 
      }

      reader.readAsDataURL(event.target.files[0]);
      this.files[2] = event.target.files[0];
    }
  }

  async doRoute(): Promise<void> {
    if (this.idVerifyNo.length === 0 || this.files.length < 3)
      return;

    let formData: FormData = new FormData();

    formData.append("idNumber", this.idVerifyNo);
    formData.append("files", this.files[0]);
    formData.append("files", this.files[1]);
    formData.append("files", this.files[2]);

    await this.services.uploadVerificationData(formData).toPromise()
    .then(() => {
      this.ngPopups.alert('Your profile has been sucessfully updated!');
      this.router.navigate(['dashboard']);
    })
    .catch((err) => {
      this.ngPopups.alert('There was an error in your submission!');
    });    
  }

}
