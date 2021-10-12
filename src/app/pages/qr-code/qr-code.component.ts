import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html'
})
export class QrcodeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var content1 = document.getElementById('content1');
    var content3 = document.getElementById('content3');
    var btn1 = document.getElementById('btn1');
    var btn3 = document.getElementById('btn3');
    content3.style.transform='translateX(0px)';
    content1.style.transform='translateX(150%)';
    btn3.style.background = "#E2E3E3"
    btn3.style.color = "#54A5A6"
    btn1.style.background = "linear-gradient(180deg, #858585 0%, #303030 100%)"
    btn1.style.color = "#fff"
  }

}
