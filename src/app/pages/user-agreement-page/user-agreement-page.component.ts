import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-agreement-page',
  templateUrl: './user-agreement-page.component.html',
})
export class UserAgreementPageComponent implements OnInit {
  parent:string;

  
  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit(): void {
    this.parent = this.authService.signupData.parentId;
  }

  toSignup(){
    this.router.navigate(['signup'], { queryParams: { parentId: this.parent, agree:'1'} });
  }
}
