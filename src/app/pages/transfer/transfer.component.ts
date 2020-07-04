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
    this.service.getMemberList().subscribe((res: any) => {
      console.log(res);
      this.membersList = res.elements;
    },
    (err) => {
      console.log(err);
    });
  }
  memberChange(): void {
    const selected = this.membersList.find(member => member.id === this.transferForm.toMemberId);
    if (selected) {
      this.transferForm.toMemberPrincipal = selected.name;
      this.transferForm.selectedMember = selected;
    }
  }

}
