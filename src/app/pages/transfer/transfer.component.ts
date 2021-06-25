import { Component, OnInit } from '@angular/core';
import { Services } from '../../services/service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html'
})
export class TransferComponent implements OnInit {
  public membersList = [];
  // member: Member;
  public transferForm: any = {};

  constructor(private service: Services) { }
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
  memberChange(): void {
    const selected = this.membersList.find(member => member.id === this.transferForm.toMemberId);
    if (selected) {
      this.transferForm.toMemberPrincipal = selected.name;
      this.transferForm.selectedMember = selected;
    }
  }

}
