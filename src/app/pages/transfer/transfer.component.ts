import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Services } from '../../services/service';
import { NgPopupsService } from 'ng-popups';
import { TRANSACTION_TYPE, Utility } from 'src/utils';

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

  constructor(
    private service: Services, 
    private router: Router, 
    private ngPopups: NgPopupsService, 
    private services:Services) { }
  ngOnInit(): void {
    
    this.service.forms.transferForm = this.transferForm;
    this.service.opsTagging = 'transfer';
    this.service.getMemberList().subscribe((res: any) => {
      // console.log(res);
      this.membersList = res.elements;
    },
    (err) => {
      console.log(err);
    });

    this.services.getProfileData().subscribe(async (res: any) => {
      const currentUser: any = await this.services.currentUser;
      this.isNotIdVerified = this.isUserIdNotVerified(currentUser);
    },
    (err) => {
      console.log(err);
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

  logout(): void {
    this.services.logout();
    this.router.navigate(['login']);
  }

  async getReceiverDetails(): Promise<void> {
    await this.service.getWalletPaymentData(this.transferForm.toAccountNo, TRANSACTION_TYPE.Transfer).toPromise()
    .then(() => {
      this.router.navigate(['transfer-details']);
    })
    .catch((err) => {
      this.ngPopups.alert('There was an error in your submission!');
    });
  }

  isUserIdNotVerified(user: any) : boolean {
    return user.idVerifiedStatus === 'Unverified';
  }
}
