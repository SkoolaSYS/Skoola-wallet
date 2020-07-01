import { Component, OnInit } from '@angular/core';
import { Services } from '../services/service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html'
})
export class TransferComponent implements OnInit {
  membersList = [];
  // member: Member;
  constructor(private service: Services) { }

  ngOnInit(): void {
    this.service.getMemberList().subscribe((res: any) => {
      console.log(res);
      this.membersList = res.elements;
    },
    (err) => {
      console.log(err);
    });
  }

}
