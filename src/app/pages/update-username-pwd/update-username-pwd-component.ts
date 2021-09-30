import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../animation-effect/index';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Services } from '../../services/service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgPopupsModule, NgPopupsService } from 'ng-popups';

@Component({
  selector: 'update-username-pwd',
  templateUrl: './update-username-pwd-component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class UpdateUsernamePwdComponent implements OnInit {

    constructor(public services: Services, private router: Router, private ngPopups: NgPopupsService) { }

    ngOnInit(): void {
      //force change username
    }
    async submit() {
      if (this.services.newusername!=this.services.confirmnewusername){
        // alert('New user name mismatch!. Please retype new user name.');
        this.ngPopups.alert('User name mismatch. Please re-keyin your new user name!');
        this.services.newusername='';
        this.services.confirmnewusername='';
        return false;
      }
      if (this.services.newpassword!=this.services.confirmnewpassword){
        // alert('New password mismatch!. Please retype new password.');
        this.ngPopups.alert('Password mismatch. Please re-keyin your new password!');
        this.services.newpassword='';
        this.services.confirmnewpassword='';
        return false;
      }

      let response = await this.services.changeMemberProfilePassword({    
          "oldPassword": this.services.password,
          "newPassword": this.services.newpassword,
          "newPasswordConfirmation": this.services.newpassword,
          "forceChange":0,
          "forceChangeUsername":0,
          "newUsername": this.services.newusername
      }).toPromise();{
        this.ngPopups.alert('Your new credential has been sucessfully updated!');
        const res = await this.services.login(this.services.newusername, this.services.newpassword).toPromise()
        
        if (this.services.isLoggedIn())
        {
          this.services.newusername='';
          this.services.confirmnewusername='';
          this.services.newpassword='';
          this.services.confirmnewpassword='';
          this.router.navigate(['dashboard']);
        }
      }
    }
}    
