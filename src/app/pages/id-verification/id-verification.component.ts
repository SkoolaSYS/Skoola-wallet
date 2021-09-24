import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { Services } from 'src/app/services/service';
import { Ng2ImgMaxService } from 'ng2-img-max';

@Component({
  selector: 'app-id-verification',
  templateUrl: './id-verification.component.html',
  styleUrls: ['./id-verification.component.scss']
})
export class IdVerificationComponent implements OnInit {
  public idVerifyNo: string = "";
  private files: File[] = new Array(3);

  constructor(private services: Services, private router: Router, private ngPopups: NgPopupsService,private ng2ImgMax: Ng2ImgMaxService) { }

  ngOnInit(): void {
  }

  urlFront: string="";
  urlBack: string="";
  urlSelfie: string="";
  uploadedImage: File;

  onSelectedFileF(event){
    if(event.target.files){
      var reader = new FileReader();
      reader.onload=(event)=>{
        this.urlFront=event.target.result as string; 
      }
      reader.readAsDataURL(event.target.files[0]);
      
      this.files[0] = event.target.files[0];
      this.ng2ImgMax.resizeImage(this.files[0], 400, 600).subscribe(
        result => {
          this.uploadedImage =new File([result], result.name);
          this.files[0]=this.uploadedImage;
        },
        error => {
          console.log('Oh no!', error);
        }
      );
    }
    
    // var frontPic = document.getElementById("frontId");
    // frontPic.style.display = "block";
  }

  onSelectedFileB(event){
    if(event.target.files){
      var reader = new FileReader();
      reader.onload=(event)=>{
        this.urlBack=event.target.result as string; 
      }

      reader.readAsDataURL(event.target.files[0]);
      this.files[1] = event.target.files[0];
      this.ng2ImgMax.resizeImage(this.files[1], 400, 600).subscribe(
        result => {
          this.uploadedImage =new File([result], result.name);
         this.files[1]=this.uploadedImage;
        },
        error => {
          console.log('Oh no!', error);
        }
      );
    }

    // var backPic = document.getElementById("backId");
    // backPic.style.display = "block";
  }

  onSelectedFileSelfie(event){
    if(event.target.files){
      var reader = new FileReader();
      reader.onload=(event)=>{
        this.urlSelfie=event.target.result as string; 
      }

      reader.readAsDataURL(event.target.files[0]);
      this.files[2] = event.target.files[0];
      this.ng2ImgMax.resizeImage(this.files[2], 400, 600).subscribe(
        result => {
          this.uploadedImage =new File([result], result.name);
          this.files[2]=this.uploadedImage;
        },
        error => {
          console.log('Oh no!', error);
        }
      );
    }
    // var selfiePic = document.getElementById("selfieId");
    // selfiePic.style.display = "block";
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
