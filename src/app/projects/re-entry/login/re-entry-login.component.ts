import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './re-entry-login.component.html'
})
export class ReEntryLoginComponent implements OnInit {
  hide: boolean = true;
  spinLogo: boolean;
  username: string = '';
  password: string = '';

  // Dummy users
  dummyUsers = [
    { username: 'danieal', password: '1234', merchant: true, idVerifiedStatus: 'Verified' },
    { username: 'test', password: 'abcd', merchant: false, idVerifiedStatus: 'Unverified' },
    { username: 'azim', password: 'guest', merchant: false, idVerifiedStatus: 'Verified' }
  ];

  constructor(private router: Router, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    const parent = localStorage.getItem("parent");
    this.spinLogo = parent != null;
  }

  togglePassword() {
    this.hide = !this.hide;
  }

  submit() {
    const user = this.dummyUsers.find(u => u.username === this.username && u.password === this.password);

    if (!user) {
      alert('Invalid username or password!');
      return;
    }

    // Show spinner for effect
    this.spinner.show();
    setTimeout(() => { // simulate delay
      this.spinner.hide();
      this.redirectUser(user);
    }, 500);
  }

  redirectUser(user: any) {
    // all dummy users go to dashboard
    this.router.navigate(['re-entry-dashboard']);
  }
}