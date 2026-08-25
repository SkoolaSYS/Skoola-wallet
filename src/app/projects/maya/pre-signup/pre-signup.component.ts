import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/services/auth.service';
import { MayaService } from '../maya.service';

@Component({
  selector: 'app-pre-signup',
  templateUrl: './pre-signup.component.html',
  styleUrls: ['./pre-signup.component.scss']
})
export class PreSignupComponent implements OnInit {
  private hide: boolean = true;
  public userId: string = "munajat12@gmail.com";
  public password: string = "password";

  constructor(private mayaService: MayaService, private ngPopups: NgPopupsService, private router: Router, 
    private authService: AuthService, private spinner: NgxSpinnerService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  async authenticateUser() {

    // call Gng Student Portal REST API to get parent and children data based on 
    // member login info

    const authorizationData = "Basic " + btoa(this.userId + ":" + this.password);
    const headerOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        Authorization: authorizationData,
      }),
    };

    let body = {
      "username": this.userId,
      "password": this.password
    }

    let httpHeaders = new HttpHeaders({
      "content-type": "application/json", "accept": "application/json"
    })

    let response = await this.http.request("post", "http://school.uyk0f6u8kq-yjr3olp7031m.p.temp-site.link/api/register", 
      { "body": body, "headers": httpHeaders
      }).toPromise();

    console.log(response);  
          
    if (response["status"] === "success") {
      this.mayaService.regData = response["data"];
      this.router.navigate(["register-maya"], { queryParams: { agree: "0" } });
    }
    else {
      // show error and stay on the same page
      alert("Error in authentication.");
      // (<HTMLElement>document.querySelector("body")).click();
    }
  }

  showPassword() {
    this.hide = !this.hide;
    if (!this.hide) {
      document.getElementById("togglePassword1").setAttribute("class", "bi-eye");
    } else {
      document.getElementById("togglePassword1").setAttribute("class", "bi-eye-slash");
    }
  }
}
