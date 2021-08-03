import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { Services } from 'src/app/services/service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Utility } from 'src/utils';



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
  errorMessage :any=
   [{field:"email",reason:"Email has been used"}
  ]
  public href: string = "";
  
  
  constructor(
    private services:Services,
    private ngPopups: NgPopupsService, 
    private router:Router, 
    private modalService: NgbModal) { }
  async ngOnInit(): Promise<void>  {

    // Append smId to signup page; /signup?smId=
    this.href = this.router.url;
    console.log(this.router.url);
    this.parentId = this.router.url.split("?")[1].split("=")[1];
      
  }
  // Terms & Condition popup
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
    return false;
  }

  //Terms & Condition Agree or Disagree; agree, checkbox remains tick: disagree, checkbox untick
  
  
  // Select Physical Card; If yes, display hidden div incl HomeAddress, PostalCode, City (kinah)
  selectCard(card){
    if (card == 1){
      document.getElementById("yesWant").style.display = "block";
      console.log("YesCard");
    }else{
      document.getElementById("yesWant").style.display = "none";
      console.log("no card");
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
          fields: customValues,
          superMerchantId: this.parentId,
        }).toPromise().then(() => {
          this.ngPopups.alert('You have succesfully signup!');
          this.router.navigate(['login']);
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
