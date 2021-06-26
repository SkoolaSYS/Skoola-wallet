import { Component, OnInit } from '@angular/core';
import { Services } from '../../services/service';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-bankload',
  templateUrl: './bankload.component.html',
})
export class BankloadComponent implements OnInit {

  myrouterLink:string="";

  // constructor() { }
  constructor(private service: Services, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.opsTagging = 'bankload';
  }

  setRouter(type){
    if(type==1){
      this.myrouterLink="/bankload-details"
    }else{
      this.myrouterLink="/cimb-bankload"
    }
  }

  changeRoute(){
    this.router.navigate([this.myrouterLink]);
  }
}
