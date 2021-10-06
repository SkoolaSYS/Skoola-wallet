import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../animation-effect/index';
import { Services } from '../../services/service';
import { NgPopupsService } from 'ng-popups';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'update-username-pwd',
  templateUrl: './update-username-pwd-component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class UpdateUsernamePwdComponent implements OnInit {

    constructor(public services: Services, private router: Router, private spinner: NgxSpinnerService, private ngPopups: NgPopupsService) { }

    ngOnInit(): void {
    this.spinner.hide();
      //force change username
      
      // if (this.services.forceChangeUsername ==false){
      // }
      
    }
    showPasswd(){
      var clickNewPswd = <HTMLInputElement> document.getElementById("updatePassword");
      if(clickNewPswd.type === "password"){
        clickNewPswd.type = "text";
      } else{
        clickNewPswd.type = "password";
      }
      var clickConfirmNewPswd = <HTMLInputElement> document.getElementById("updateConfirmPassword");
      if(clickConfirmNewPswd.type === "password"){
        clickConfirmNewPswd.type = "text";
      } else{
        clickConfirmNewPswd.type = "password";
      }
    }
    async submit() {
     
      if (this.services.newpassword!=this.services.confirmnewpassword){
        // alert('New password mismatch!. Please retype new password.');
        this.ngPopups.alert('Password mismatch. Please re-keyin your new password!');
        this.services.newpassword='';
        this.services.confirmnewpassword='';
        return false;
      }
      this.spinner.show();
      let response = await this.services.changeMemberProfilePassword({    
          "oldPassword": this.services.password,
          "newPassword": this.services.newpassword,
          "newPasswordConfirmation": this.services.newpassword,
          "forceChange":0,
          "newUsername": this.services.newusername,
          // "forceChangeUsername":0
      }).toPromise();{
        this.spinner.hide();
        this.ngPopups.alert('Your new credential has been sucessfully updated!');
        const res = await this.services.login(this.services.newusername, this.services.newpassword).toPromise()
        
        if (this.services.isLoggedIn())
        {
          this.services.newusername='';
          this.services.newpassword='';
          this.services.confirmnewpassword='';
          this.router.navigate(['dashboard']);
        }
      }
    }
}    
