import { Component, OnInit } from '@angular/core';
import { Services } from '../../services/service';
//qr payment danieal
// to do (auto select merchant account)
@Component({
  selector: 'app-transfer',
  templateUrl: './qr-payment.component.html'
})
export class QrPaymentComponent implements OnInit {
  public membersList = [];
  public transferForm: any = {};
  memberId = 'merchant01';
  input = document.getElementById('6');
  memberSelected : any;
  

  constructor(private service: Services) { }
  ngOnInit(): void {
    this.memberId = 'merchand01';
    this.service.forms.transferForm = this.transferForm;
    this.service.opsTagging = 'transfer';
    this.memberSelected = 'merchant01';
    this.service.getMemberList().subscribe((res: any) => {
      // console.log(res);
      this.membersList = res.elements;
    },
    (err) => {
      console.log(err);
    });
  }
  memberChange(): void {
    const memberId = this.membersList.find(member => member.id === this.memberId);
    if (memberId) 
      this.transferForm.toMemberPrincipal = memberId;
      this.transferForm.selectedMember = memberId;
    
  }

}
