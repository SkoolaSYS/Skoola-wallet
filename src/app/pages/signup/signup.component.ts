import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { Services } from 'src/app/services/service';
import { Utility } from 'src/utils';
import { AuthService } from 'src/app/services/auth.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  
})
export class SignupComponent implements OnInit {
  // Onboarding process (kinah)
  hide: boolean = true;
  hideConfirm: boolean=true;
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
  cardSelect1: boolean;
  cardSelect2: boolean;
  data:any = [];
  agree:string;
  yesCard:string;
  cardSelection:string;
  errorMessage :any=
   [{field:"email",reason:"Email has been used"}]
  public href: string = "";
  constructor(
    private services:Services,
    private ngPopups: NgPopupsService, 
    private router:Router,
    private authService:AuthService, private spinner: NgxSpinnerService) { }
  
  async ngOnInit(): Promise<void>  {
    this.spinner.hide();
    // Append smId to signup page; /signup?smId=
     this.href = this.router.url;
     var test = <HTMLInputElement> document.getElementById("wantCard");
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
      this.cardSelect1 = this.authService.signupData.cardSelection;
      if (this.cardSelect1){
        var btn1 = <HTMLInputElement> document.getElementById("radioBtn1")
        btn1.checked = true
        document.getElementById("yesWant").style.display = "block";
      }else{
        var btn2 = <HTMLInputElement> document.getElementById("radioBtn2")
        btn2.checked = true
      }
     }
     catch (e) {
      console.log(e);
      
     }
     finally{}
    
    if (this.agree == "1")
        this.tickCheckbox();
  }
  // 
  showPassword(){
    this.hide = !this.hide;
    if (!this.hide){
    document.getElementById("togglePassword1").setAttribute("class","bi-eye");
  }else{
    document.getElementById("togglePassword1").setAttribute("class","bi-eye-slash");
  }
  }
  showConfirmPassword(){
    this.hideConfirm = !this.hideConfirm;
    if (!this.hideConfirm){
    document.getElementById("togglePassword2").setAttribute("class","bi-eye");
  }else{
    document.getElementById("togglePassword2").setAttribute("class","bi-eye-slash");
  }
  }
  //Radio Button remains checked after page load
  radioButton(){
    var yesRadio = <HTMLInputElement> document.getElementById("radioBtn1");
    yesRadio.checked = true;
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
    var btn1 = <HTMLInputElement> document.getElementById("radioBtn1")
    this.authService.signupData.cardSelection = btn1.checked;
    
    this.router.navigate(['user-agreement-page']);
  }
  // Select Physical Card; If yes, display hidden div incl HomeAddress, PostalCode, City (kinah)
  selectCard(card){
    if (card == 1){
      document.getElementById("yesWant").style.display = "block";
      this.cardSelect1 = true;
      this.cardSelect2 = false;
    }else{
      document.getElementById("yesWant").style.display = "none";
      this.cardSelect1 = false;
      this.cardSelect2 = true;
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
          this.spinner.show();
          await this.services.signupUser({
          username : this.loginUsername,
          name : this.fullName,
          email : this.emailAddress,
          password : this.createPassword,
          customValues: customValues,
          superMerchantId: this.parentId,
          cardRequest: this.cardSelect1
        }).toPromise().then(() => {
          this.spinner.hide();
          this.router.navigate(['../acknowledgement-page']);
        }).catch((err) => {
            this.errorObj = this.errorMessage.find(error=>error.field === err.error.field);
            this.ngPopups.alert(this.errorObj.reason);
          });
          }
      }
    }else{
      this.spinner.show();
      this.ngPopups.alert("Email invalid");
      this.spinner.hide();
    }
  }
}
