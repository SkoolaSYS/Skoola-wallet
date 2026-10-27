import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MayaService } from '../maya.service';

@Component({
  selector: 'app-school-dashboard',
  templateUrl: './school-dashboard.component.html',
  styleUrls: ['./school-dashboard.component.scss']
})
export class SchoolDashboardComponent implements OnInit {

  schoolParent: any;
  showSchoolChat = false;
  schoolChatUrl: SafeResourceUrl | null = null;

  // Temporary data.
  // Later we will get these from the e-wallet API / school API.
  walletBalance: number = 0.00;

student: any = {
  id: '',
  studentId: '',
  name: '',
  email: '',
  mobile: '',
  relationship: '',
  dateOfBirth: '',
  status: '',
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
  this.router.navigate(['projects/maya/skoola-marketplace']);
}
  

  constructor(
  private router: Router,
  private sanitizer: DomSanitizer,
  private mayaService: MayaService
) {}

  ngOnInit(): void {

  const data = localStorage.getItem('school-parent');

  if (!data) {
    this.router.navigate(['skoola-login']);
    return;
  }

  this.schoolParent = JSON.parse(data);

  console.log(
    'School dashboard parent:',
    this.schoolParent
  );

  // Load child/dependent from CBS
  this.loadCbsChild();
  this.loadCbsBalance();
}

loadCbsChild(): void {

  this.mayaService
    .getCbsDependents()
    .subscribe(

      (response: any) => {

        console.log(
          'CBS dependents:',
          response
        );

        if (
          response &&
          response.success &&
          response.dependents &&
          response.dependents.length > 0
        ) {

          const child = response.dependents[0];

          this.student = {
            id: child.childId,

            // CBS user code, e.g. U1-D2
            studentId: child.userCode,

            name: child.fullName,
            email: child.email,
            mobile: child.mobile,

            relationship: child.relationship,
            dateOfBirth: child.dateOfBirth,

            status: child.status,

            className: ''
          };

          console.log(
            'CBS child loaded:',
            this.student
          );

        } else {

          console.warn(
            'No CBS child linked to this user.'
          );

        }
      },

      (error) => {

        console.error(
          'Unable to load CBS child:',
          error
        );

      }
    );
}

loadCbsBalance(): void {

  this.mayaService
    .getCbsBalance()
    .subscribe(
      (response: any) => {

        console.log('CBS balance:', response);

        if (
          response &&
          response.success &&
          response.availableBalance !== undefined
        ) {
          this.walletBalance =
            Number(response.availableBalance) || 0;
        }

      },
      (error) => {

        console.error(
          'Unable to load CBS balance:',
          error
        );

        this.walletBalance = 0;
      }
    );
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
      'https://ai.skoola.my/chat?email=' +
      encodeURIComponent(email);

    this.schoolChatUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(url);

    this.showSchoolChat = true;

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  closeSchoolChat(): void {

    this.showSchoolChat = false;

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

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