import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopup, NgPopupsService } from 'ng-popups';
import { Services } from 'src/app/services/service';
import { Utility } from 'src/utils';

@Component({
  selector: 'app-pledge-list-details-view',
  templateUrl: './pledge-list-details-view.component.html',
  styleUrls: ['./pledge-list-details-view.component.scss']
})
export class PledgeListDetailsViewComponent implements OnInit {
  value: String;
  pledgeAmount;
  pledgeFinancing;
  date;
  amountBalance;
  constructor(private services: Services,private router:Router,private ngPopups:NgPopupsService) { }
  @Input() sender: string;
  @Input() amount: string;
  @Input() image: string;

  ngOnInit(): void {
    this.value = this.router.url.split("?")[1].split("=")[1]; 
    this.services.getPledgeId(this.value).subscribe((res: any) => {
      this.pledgeAmount = res.pledgeAmount;
      this.pledgeFinancing = res.pledgeFinancing;
      this.date = Utility.formatDate(new Date());
    });
  }
  
}
