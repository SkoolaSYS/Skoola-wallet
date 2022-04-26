import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Services } from '../../services/service';
import { NgPopupsService } from 'ng-popups';
import { TRANSACTION_TYPE, Utility } from 'src/utils';
import { NgxSpinnerService } from "ngx-spinner";
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';


@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html'
})
export class TransferComponent implements OnInit {
  public membersList = [];
  buygold: boolean = false;
  // member: Member;
  public transferForm: any = {};
  public imageSrc: any = "assets/icons-img/user-dp.png";
  public isNotIdVerified: boolean = false;
  isMerchant:boolean;

  constructor(
    private service: Services, 
    private router: Router, 
    private ngPopups: NgPopupsService, 
    private services:Services,
    private spinner: NgxSpinnerService, private dialog: MatDialog) { }

    async ngOnInit(): Promise<void>  {
    this.spinner.hide();
    const currentUser: any = await this.services.currentUser;
    this.isMerchant = currentUser.merchant;
    this.service.forms.transferForm = this.transferForm;
    this.service.opsTagging = 'transfer';
    this.service.getMemberList().subscribe((res: any) => {
      this.membersList = res.elements;
    },
    (err) => {
      Utility.log(err);
    });

    this.services.getProfileData().subscribe(async (res: any) => {
      const currentUser: any = await this.services.currentUser;
      this.isNotIdVerified = this.isUserIdNotVerified(currentUser);
    this.isMerchant = currentUser.merchant;
    },
    (err) => {
      Utility.log(err);
    });
    
    this.transferForm.effectiveDate = Utility.formatDate(new Date());
  }

  // Commented out temporarily. (rwa)
  // memberChange(): void {
  //   const selected = this.membersList.find(member => member.id === this.transferForm.toMemberId);
  //   if (selected) {
  //     this.transferForm.toMemberPrincipal = selected.name;
  //     this.transferForm.selectedMember = selected;
  //   }
  // }

  // logout(): void {
  //   this.services.logout();
  //   this.router.navigate(['login']);
  // }

  getReceiverDetails() {
    this.spinner.show();

    this.services.getTransactionFeeAmount(TRANSACTION_TYPE.Transfer).subscribe(
      (res) => {
        const transactionFeeAmount = parseFloat(res.toString());
        const balance = parseFloat(this.services.currentBalance);
        const amount = parseFloat(this.transferForm.amount);
        
        if ((amount+transactionFeeAmount) <= balance) {
          this.service.getWalletPaymentData(this.transferForm.toAccountNo, TRANSACTION_TYPE.Transfer).toPromise()
          .then(() => {
            this.spinner.hide();
            this.router.navigate(['transfer-details']);
          })
          .catch((err) => {
            this.spinner.hide();

            const dialogRef = this.dialog.open(AlertDialogComponent, { data: { message: "There was an error processing your request. Please try again." } });
            dialogRef.afterClosed().subscribe(() => {
              this.router.navigate(['dashboard']);
            });
          });
        }
        else {
          this.spinner.hide();
          this.dialog.open(AlertDialogComponent, { data: { message: "The balance in your account is not sufficient to cover the transaction fee." } });
        }
      },
      (err) => {
        this.spinner.hide();

        const dialogRef = this.dialog.open(AlertDialogComponent, { data: { message: "There was an error processing your request. Please try again." } });
        dialogRef.afterClosed().subscribe(() => {
          this.router.navigate(['dashboard']);
        });
      });


    // this.spinner.show();
    // await this.service.getWalletPaymentData(this.transferForm.toAccountNo, TRANSACTION_TYPE.Transfer).toPromise()
    // .then(() => {
    //   this.spinner.hide();
    //   this.router.navigate(['transfer-details']);
    // })
    // .catch((err) => {
    //   this.ngPopups.alert('There was an error in your submission!',{theme:'material',title:'Oops...'});
    // });
  }

  isUserIdNotVerified(user: any) : boolean {
    return user.idVerifiedStatus === 'Unverified';
  }
}
