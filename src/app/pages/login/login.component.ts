import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../animation-effect/index';
import { Services } from '../../services/service';
import { NgPopupsService } from 'ng-popups';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class LoginComponent implements OnInit {
  hide: boolean = true;

    constructor(public services: Services, private router: Router,private ngPopups: NgPopupsService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.hide();
    if (this.services.isLoggedIn())
    {
      this.router.navigate(['dashboard']);
    }
    if (!this.services.username) {
      this.router.navigate(['login']);
    }
  }

  showPasswd(){
    var clickPswd = <HTMLInputElement> document.getElementById("loginPassword");
    if(clickPswd.type === "password"){
      clickPswd.type = "text";
    } else{
      clickPswd.type = "password";
    }}


//   showPassword(){
//     this.hide = !this.hide;
//     if (!this.hide){
//     document.getElementById("togglePasswordLogin").setAttribute("class","bi-eye mt-3 mr-3");
//   }else{
//     document.getElementById("togglePasswordLogin").setAttribute("class","bi-eye-slash mt-3 mr-3");
//   }
// }

  submit() {
    this.services.login(this.services.username, this.services.password)
    .subscribe(() => {
      this.spinner.show();
      if( this.services.forceChangePassword ) {
        this.ngPopups.alert('Credential Update. You need to change your credentials!',{theme: 'material'});
         this.router.navigate(['update-username-pwd']);
       } else {
         this.spinner.hide();
         this.router.navigate(['dashboard']);
       }
    });
  }
}
