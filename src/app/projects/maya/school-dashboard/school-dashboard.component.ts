import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-school-dashboard',
  templateUrl: './school-dashboard.component.html',
  styleUrls: ['./school-dashboard.component.scss']
})
export class SchoolDashboardComponent implements OnInit {

  schoolParent: any;

  // Temporary data.
  // Later we will get these from the e-wallet API / school API.
  walletBalance: number = 150.00;

student: any = {
  name: '',
  className: ''
};

recentTransactions = [
  {
    title: 'Canteen Payment',
    date: 'Today, 10:25 AM',
    amount: -5.50
  },
  {
    title: 'Wallet Top Up',
    date: 'Yesterday, 8:10 PM',
    amount: 50.00
  },
  {
    title: 'School Bookstore',
    date: '8 Aug 2026',
    amount: -18.00
  }
];

getInitial(): string {
  if (!this.schoolParent || !this.schoolParent.name) {
    return 'P';
  }

  return this.schoolParent.name
    .charAt(0)
    .toUpperCase();
}

openMarketplace(): void {
  window.open('https://murbaltl.com', '_blank');
}
  

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {

    const data = localStorage.getItem('school-parent');

    if (data) {

      this.schoolParent = JSON.parse(data);

      console.log(
        'School dashboard parent:',
        this.schoolParent
      );

      this.student.studentId =
        this.schoolParent.student_id;

    } else {

      // User shouldn't normally reach here
      // without school parent information.
      this.router.navigate(['dashboard']);
    }
  }


  topUp(): void {
    this.router.navigate(['topup-amount']);
  }


  openAttendance(): void {
    console.log('Open attendance');
  }


  openSchoolChat(): void {
    const email = this.schoolParent?.email;

    if (!email) {
      console.error('User email not found');
      return;
    }

    const url =
      'http://72.61.151.99:4200/chat?email=' +
      encodeURIComponent(email);

    window.open(url, '_blank');
  }


  openPayments(): void {
    console.log('Open school payments');
  }


  openTransactions(): void {
    console.log('Open transaction history');
  }


  goToNormalWallet(): void {
    this.router.navigate(['dashboard']);
  }


  logout(): void {
    localStorage.removeItem('school-parent');
    this.router.navigate(['login']);
  }
}