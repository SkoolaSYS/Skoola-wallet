import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { NgxSpinnerService } from 'ngx-spinner';

import { Services } from '../../../services/service';
import { Utility } from 'src/utils';
import { MayaService } from '../maya.service';

@Component({
  selector: 'app-skoola-login',
  templateUrl: './skoola-login.component.html',
  styleUrls: ['./skoola-login.component.scss']
})
export class SkoolaLoginComponent implements OnInit {

  hide: boolean = true;

  loading: boolean = false;

  errorMessage: string = '';

  public isNotIdVerified: boolean;
  public isMerchant: boolean;

  constructor(
    public services: Services,
    private router: Router,
    private ngPopups: NgPopupsService,
    private spinner: NgxSpinnerService,
    private mayaService: MayaService
  ) { }

    async ngOnInit(): Promise<void> {
      this.spinner.hide();
    }


  togglePassword(): void {

    this.hide = !this.hide;
  }


  isUserIdNotVerified(user: any): boolean {

    return user.idVerifiedStatus === 'Unverified';
  }


  checkSchoolUser(currentUser: any): void {

    const email =
      currentUser.email ||
      currentUser.username ||
      this.services.username;

    if (!email) {

      this.errorMessage =
        'Unable to identify your school account.';

      this.spinner.hide();

      return;
    }

    this.mayaService
      .checkSchoolParentByEmail(email)
      .subscribe(

        (response: any) => {

          console.log(
            'School parent response:',
            response
          );

          this.spinner.hide();
          this.loading = false;

          if (response.isSchoolParent) {

            localStorage.setItem(
              'school-parent',
              JSON.stringify(response.parent)
            );

            this.router.navigate([
              'school-dashboard'
            ]);

          } else {

            localStorage.removeItem(
              'school-parent'
            );

            this.errorMessage =
              'This account is not registered as a Skoola parent.';
          }
        },

        (error) => {

          console.error(
            'School parent check error:',
            error
          );

          this.spinner.hide();
          this.loading = false;

          this.errorMessage =
            'Unable to verify your Skoola account. Please try again.';
        }
      );
  }


  submit(): void {

  this.errorMessage = '';

  if (!this.services.username || !this.services.password) {
    this.errorMessage =
      'Please enter your username and password.';
    return;
  }

  this.loading = true;
  this.spinner.show();

  this.mayaService
    .loginCbs(
      this.services.username,
      this.services.password
    )
    .subscribe(

      (response: any) => {

        console.log(
          'CBS login successful:',
          response.user
        );

        if (
          !response ||
          !response.success ||
          !response.accessToken ||
          !response.user
        ) {
          this.spinner.hide();
          this.loading = false;

          this.errorMessage =
            'Invalid login response.';
          return;
        }

        /*
         * Store CBS authentication separately.
         *
         * Do NOT use the old "accessToken" key yet because
         * legacy Services uses that for /rest/... Basic Auth.
         */
        localStorage.setItem(
          'cbsAccessToken',
          response.accessToken
        );

        localStorage.setItem(
          'cbsUser',
          JSON.stringify(response.user)
        );

        /*
         * Store useful CBS user details.
         */
        if (response.user.walletNumber) {
          localStorage.setItem(
            'cbsWalletNumber',
            response.user.walletNumber
          );
        }

        /*
         * Update currentUser so the existing Skoola pages
         * can access the logged-in user.
         */
        const currentUser: any = {
          id: response.user.userId,
          userId: response.user.userId,
          userCode: response.user.userCode,

          name: response.user.fullName,
          fullName: response.user.fullName,

          email: response.user.email,
          mobile: response.user.mobile,

          organizationId:
            response.user.organizationId,

          clusterId:
            response.user.clusterId,

          walletNumber:
            response.user.walletNumber,

          currency:
            response.user.currency,

          /*
           * Compatibility values for old Wallet components.
           */
          merchant: false,
          idVerifiedStatus: 'Verified'
        };

        this.services.currentUser =
          Promise.resolve(currentUser);

        /*
         * Now check whether this CBS user is also
         * registered as a Skoola parent.
         */
        this.checkSchoolUser(currentUser);
      },

      (error) => {

        console.error(
          'CBS login error:',
          error
        );

        this.spinner.hide();
        this.loading = false;

        if (error.status === 401) {
          this.errorMessage =
            'Invalid username or password.';
        } else if (error.status === 403) {
          this.errorMessage =
            'Your account is not allowed to login.';
        } else {
          this.errorMessage =
            'Unable to connect to CBS. Please try again.';
        }
      }
    );
}

}
