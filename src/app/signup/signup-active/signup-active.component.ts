import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-active',
  templateUrl: './signup-active.component.html'
})
export class SignupActiveComponent implements OnInit {
  userName: boolean = true;
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
  hide: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  showPassword(){
    this.hide = !this.hide;
    if (!this.hide){
    document.getElementById("togglePassword1").setAttribute("class","bi-eye");
  }else{
    document.getElementById("togglePassword1").setAttribute("class","bi-eye-slash");
  }
  }

}
