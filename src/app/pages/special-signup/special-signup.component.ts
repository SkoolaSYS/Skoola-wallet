import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { NgxSpinnerService } from 'ngx-spinner';
import { Services } from 'src/app/services/service';
import { Utility } from 'src/utils';

@Component({
  selector: 'app-special-signup',
  templateUrl: './special-signup.component.html'
})
export class SpecialSignupComponent implements OnInit {
  userName: boolean = true;
  parentId: string;
  userNameLong: boolean = true;
  nameFull: boolean = true;
  emailAddr: boolean = true;
  emailValid: boolean = true;
  ic: boolean = true;
  phone: boolean = true;
  newPass: boolean = true;
  loginUsername : string;
  fullName : string;
  emailAddress : string;
  noTelephone : string;
  nricNumber : string;
  createPassword : string;
  errorMessage :any=
   [{field:"email",reason:"Email has been used"}]
  errorObj:any;
  hide: boolean = true;

  constructor(private services:Services,private ngPopups: NgPopupsService,private router:Router,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.parentId = this.router.url.split("?")[1].split("=")[1];
  }

  showPassword(){
    this.hide = !this.hide;
    if (!this.hide){
    document.getElementById("togglePassword1").setAttribute("class","bi-eye");
  }else{
    document.getElementById("togglePassword1").setAttribute("class","bi-eye-slash");
  }
  }
  async doSignupUser(){
    let data: any = {};
    let customValues: any[] = [];

    if(this.emailAddress){
      this.emailAddr = true;
      if (Utility.validateEmail(this.emailAddress)){
        this.emailValid = true;
      }else{
        this.emailValid = false;
      }
    }else{
      this.emailAddr = false;
    }

    if(this.loginUsername){
      this.userName = true;
      if(this.loginUsername.length > 4){
        this.userNameLong = true;
      }else{
        this.userNameLong = false;
      }
    }else{
      this.userName = false;
    }

    if(this.fullName){
      this.nameFull = true;
    }else{
      this.nameFull = false;
    }
    if (this.noTelephone){
      this.phone = true;
      customValues.push({
        "internalName": "mobilePhone",
        "value": this.noTelephone
      });
    }else{
        this.phone = false;
    }

    if (this.nricNumber){
    this.ic = true;
    customValues.push({
      "internalName": "NRIC",
      "value": this.nricNumber
    });}else{
      this.ic = false;
    }

    if(this.createPassword){
      this.newPass = true;
    }else{
      this.newPass = false;
    }
    if (customValues.length != 0)  
    data.customValues = customValues;
    
    if (this.userName && this.nameFull && this.emailAddr && this.phone && this.ic && this.newPass && customValues != null && this.parentId != null ){
      this.errorMessage.push({field:this.loginUsername,reason:"Username has been used"})
      this.spinner.show();
      await this.services.specialSignupUser({
      username : this.loginUsername,
      name : this.fullName,
      email : this.emailAddress,
      password : this.createPassword,
      customValues: customValues,
      superMerchantId: this.parentId
    }).toPromise().then(() => {
      this.spinner.hide();
      this.router.navigate(['../acknowledgement-page']);
    }).catch((err) => {
      this.spinner.hide();
        this.errorObj = this.errorMessage.find(error=>error.field === err.error.field);
        this.ngPopups.alert(this.errorObj.reason,{theme:'material',title:'Oops...'});
      });
    }
  }
  
}
