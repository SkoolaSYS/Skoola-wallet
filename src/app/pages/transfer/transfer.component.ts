import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Services } from '../../services/service';
import { NgPopupsService } from 'ng-popups';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html'
})
export class TransferComponent implements OnInit {
  public membersList = [];
  // member: Member;
  public transferForm: any = {};

  constructor(private service: Services, private router: Router, private ngPopups: NgPopupsService) { }
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

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    this.transferForm.effectiveDate = (day < 10 ? "0" : "") + day + "/" + (month < 10 ? "0" : "") + month + "/" + today.getFullYear();
  }

  // Commented out temporarily. (rwa)
  // memberChange(): void {
  //   const selected = this.membersList.find(member => member.id === this.transferForm.toMemberId);
  //   if (selected) {
  //     this.transferForm.toMemberPrincipal = selected.name;
  //     this.transferForm.selectedMember = selected;
  //   }
  // }

  async getReceiverDetails(): Promise<void> {
    await this.service.getMemberByAccountNumber(this.transferForm.toAccountNo).toPromise()
    .then(() => {
      this.router.navigate(['transfer-details']);
    })
    .catch((err) => {
      this.ngPopups.alert('There was an error in your submission!');
    });
  }
}
