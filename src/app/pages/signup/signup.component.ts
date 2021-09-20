import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { Services } from 'src/app/services/service';
import { Utility } from 'src/utils';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  
})
export class SignupComponent implements OnInit {
  // Onboarding process (kinah)
  loginUsername : string;
  fullName : string;
  emailAddress : string;
  nricNumber : string;
  createPassword : string;
  confirmPassword : string;
  homeAddress: string;
  postalCode: string;
  stateCity: string;
  parentId: string ;
  errorObj: any;
  cardSelect: boolean = false;
  data:any = [];
  agree:string;
  errorMessage :any=
   [{field:"email",reason:"Email has been used"}]
  public href: string = "";
  constructor(
    private services:Services,
    private ngPopups: NgPopupsService, 
    private router:Router,
    private authService:AuthService) { }
  
  async ngOnInit(): Promise<void>  {
    // Append smId to signup page; /signup?smId=
     this.href = this.router.url;
     
     this.parentId = this.router.url.split("?")[1].split("=")[1].split("&")[0];
     
     this.agree = this.router.url.split("?")[1].split("=")[2];
     
  
     try{
      this.loginUsername = this.authService.signupData.username;
      this.fullName = this.authService.signupData.fullName; 
      this.emailAddress = this.authService.signupData.emailAddress;
      this.nricNumber = this.authService.signupData.nricNumber;
      this.createPassword = this.authService.signupData.createPassword;
      this.confirmPassword = this.authService.signupData.confirmPassword;
      this.homeAddress = this.authService.signupData.homeAddress;
      this.postalCode = this.authService.signupData.postalCode;
      this.stateCity = this.authService.signupData.stateCity;
      
     }
     catch (e) {
      console.log(e);
      
     }
     finally{}
     
    if (this.agree == "1")
        this.tickCheckbox();
  
  }
  //Terms & Condition Agree or Disagree; agree, checkbox remains tick
  tickCheckbox(){
    var agreeCheckbox = <HTMLInputElement> document.getElementById("checkAgree");
    agreeCheckbox.checked = true;
  }
  //Terms & Condition; navigate to User Agreement page while passing data from Signup page
  agreementCheckbox(){
    this.authService.signupData.username = this.loginUsername;
    this.authService.signupData.fullName = this.fullName;
    this.authService.signupData.emailAddress = this.emailAddress;
    this.authService.signupData.nricNumber = this.nricNumber;
    this.authService.signupData.createPassword = this.createPassword;
    this.authService.signupData.confirmPassword = this.confirmPassword;
    this.authService.signupData.homeAddress = this.homeAddress;
    this.authService.signupData.postalCode = this.postalCode;
    this.authService.signupData.stateCity = this.stateCity;
    this.authService.signupData.parentId = this.parentId;
    this.router.navigate(['user-agreement-page']);
  }
  // Select Physical Card; If yes, display hidden div incl HomeAddress, PostalCode, City (kinah)
  selectCard(card){
    if (card == 1){
      document.getElementById("yesWant").style.display = "block";
      this.cardSelect = true;
    }else{
      document.getElementById("yesWant").style.display = "none";
      this.cardSelect = false;
    }
    return;
  }
  // Insert Sign Up user to back-end (kinah)
  async doSignupUser(){
    let data: any = {};
    let customValues: any[] = [];

    if (Utility.validateEmail(this.emailAddress) == true){

      if (this.createPassword != this.confirmPassword){
          this.ngPopups.alert('Password mismatch. Please re-keyin your new password!');
          this.createPassword='';
          this.confirmPassword='';
      }else{
        
        if (this.nricNumber)
        customValues.push({
          "internalName": "NRIC",
          "value": this.nricNumber
        });

        if (this.homeAddress)
        customValues.push({
          "internalName": "address",
          "value": this.homeAddress
        });

        if (this.postalCode)
        customValues.push({
          "internalName": "postalCode",
          "value": this.postalCode
        });

        if (this.stateCity)
        customValues.push({
          "internalName": "city",
          "value": this.stateCity
        });

        if (customValues.length != 0)  
        data.customValues = customValues;
        
        if (this.loginUsername!= null && this.fullName != null && this.emailAddress != null && this.nricNumber != null && this.createPassword != null && customValues != null && this.parentId != null ){
          this.errorMessage.push({field:this.loginUsername,reason:"Username has been used"})
          await this.services.signupUser({
          username : this.loginUsername,
          name : this.fullName,
          email : this.emailAddress,
          password : this.createPassword,
          customValues: customValues,
          superMerchantId: this.parentId,
          cardRequest: this.cardSelect
        }).toPromise().then(() => {
          this.router.navigate(['acknowledgement-page']);
        }).catch((err) => {
            this.errorObj = this.errorMessage.find(error=>error.field === err.error.field);
            this.ngPopups.alert(this.errorObj.reason);
          });
          }
      }
    }else{
      this.ngPopups.alert("Email invalid");
    }
  }
}
