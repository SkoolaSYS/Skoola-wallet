import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { Services } from 'src/app/services/service';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-id-verification',
  templateUrl: './id-verification.component.html',
  styleUrls: ['./id-verification.component.scss']
})
export class IdVerificationComponent implements OnInit {
  // public idVerifyNo: string = "";
  private files: File[] = new Array(3);
  activetransaction: boolean;
  currencyType: any;
  currentBalance: any;
  userName: any;
  cardNumber: any;
  transactionAmount: any;
  goldAmount: any;    // per transaction gold amount
  goldWhole: any;;    // accumulated gold amount
  goldFraction: any;  // accumulated gold amount


  constructor(private service: Services, private router: Router, private ngPopups: NgPopupsService,private ng2ImgMax: Ng2ImgMaxService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.hide();

    this.activetransaction = this.service.activetransaction;
    if (this.activetransaction === true) {
      this.transactionAmount = this.service.transactionData.amount;
      this.goldAmount = this.service.transactionData.gold;  
    }

    // this.activetransaction = true;
    this.service.getAccountBalance().subscribe((res: any) => {
      //(res)
      this.currentBalance = res[0].status.availableBalance;
      this.service.currentBalance = this.currentBalance;
      this.currencyType = res[0].account.type.currency.symbol;

      const sumGoldParts = res[0].gold.sumGoldAmount.toFixed(5).toString().split(".");
      this.goldWhole = sumGoldParts[0];
      this.goldFraction = sumGoldParts[1];

      this.service.userAccount = res[0].account;
    },
    (err) => {
      (err);
      // this.service.logout();
    });

    this.service.getProfileData().subscribe((res: any) => {
      // (res);
      this.userName = res.name;
      this.cardNumber = res.customValues.find(object => object.internalName == "AccNumber")?.value; 
    },
    (err) => {
      (err);
      // this.service.logout();
    });
  }

  // Enable Confirm Button after ticking checkbox
  enableConfirm(){
    var yesUpload = <HTMLInputElement> document.getElementById("checkAgree");
    if (yesUpload.checked==true){
      document.getElementById("btnConfirm").removeAttribute('disabled');
    }else{
      document.getElementById("btnConfirm").setAttribute('disabled','disabled');
    }
  }

  urlFront: any="assets/icons-img/frontview-id@3x.png";
  urlBack: any="assets/icons-img/frontview-id@3x.png";
  urlSelfie: any="assets/icons-img/selfiewithimage@3x.png";
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
        }
      );
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
      this.ng2ImgMax.resizeImage(this.files[1], 400, 600).subscribe(
        result => {
          this.uploadedImage =new File([result], result.name);
         this.files[1]=this.uploadedImage;
        },
        error => {
        }
      );
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
      this.ng2ImgMax.resizeImage(this.files[2], 400, 600).subscribe(
        result => {
          this.uploadedImage =new File([result], result.name);
          this.files[2]=this.uploadedImage;
        },
        error => {
        }
      );
    }
  }

  async doRoute(): Promise<void> {
    // if (this.idVerifyNo.length === 0 || this.files.length < 3)
    //   return;
    this.spinner.show();
    let formData: FormData = new FormData();
    // formData.append("idNumber", this.idVerifyNo);
    formData.append("files", this.files[0]);
    formData.append("files", this.files[1]);
    formData.append("files", this.files[2]);
    await this.service.uploadVerificationData(formData).toPromise()
    .then(() => {
      this.spinner.hide();
      this.ngPopups.alert('Your profile has been sucessfully updated!',{theme: 'material', title: 'Success!'});
      this.router.navigate(['dashboard']);
    })
    .catch((err) => {
      this.spinner.hide();
      this.ngPopups.alert('There was an error in your submission!',{theme: 'material', title: 'Oops...'});
    });    
  }

}
