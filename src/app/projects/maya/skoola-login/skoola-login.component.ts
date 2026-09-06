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

    if (
      !this.services.username ||
      !this.services.password
    ) {

      this.errorMessage =
        'Please enter your username and password.';

      return;
    }

    this.loading = true;

    this.services
      .login(
        this.services.username,
        this.services.password
      )
      .subscribe(

        async () => {

          this.spinner.show();

          if (
            this.services.forceChangePassword
          ) {

            this.loading = false;
            this.spinner.hide();

            this.ngPopups.alert(
              'Credential Update. You need to change your credentials!',
              {
                theme: 'material'
              }
            );

            this.router.navigate([
              'update-username-pwd'
            ]);

            return;
          }


          const currentUser: any =
            await this.services.currentUser;

          console.log(
            'Skoola current user:',
            currentUser
          );

          this.isNotIdVerified =
            this.isUserIdNotVerified(
              currentUser
            );

          this.isMerchant =
            currentUser.merchant;


          /*
           * Keep the existing merchant logic
           */
          if (this.isMerchant) {

            this.loading = false;

            const merch =
              localStorage.getItem(
                'agree-merch'
              );

            Utility.log(merch);

            if (
              this.isNotIdVerified
            ) {

              if (merch == null) {

                this.router.navigate([
                  'merchant-agreement-page'
                ]);

              } else {

                this.router.navigate([
                  'merchant-cert'
                ]);
              }

            } else {

              if (merch == null) {

                this.router.navigate([
                  'merchant-agreement-page'
                ]);

              } else {

                this.router.navigate([
                  'dashboard'
                ]);
              }
            }

            return;
          }


          /*
           * Normal Skoola parent account
           */
          if (this.isNotIdVerified) {

            this.loading = false;
            this.spinner.hide();

            this.router.navigate([
              'id-verification'
            ]);

            return;
          }


          /*
           * User is authenticated and verified.
           * Now confirm they are a Skoola parent.
           */
          this.checkSchoolUser(
            currentUser
          );

        },

        (error) => {

          console.error(
            'Skoola login error:',
            error
          );

          this.spinner.hide();

          this.loading = false;

          this.errorMessage =
            'Invalid username or password.';
        }
      );
  }

}
