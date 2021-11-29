import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Html5Qrcode, Html5QrcodeScanner } from 'html5-qrcode';
import { SelectMultipleControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { Services } from 'src/app/services/service';
import { Console } from 'node:console';
import { JsonpClientBackend } from '@angular/common/http';
@Component({
  selector: 'app-qr-view',
  templateUrl: './qr-view.component.html'
})
export class qrViewComponent implements OnInit{
  @Input() qrview: boolean = false;

  constructor(private router:Router, private service:Services) {
  }

  ngOnInit(): void {
    let html5QrCode = new Html5Qrcode("reader");
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
      html5QrCode.stop()
      const data = JSON.parse(decodedText)
      const route = data.route 
      this.service.qrData = data
      this.router.navigate([route])
    };
    const qrCodeErrorCallback = (errorMessage) => {
    
    };
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };
    html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback,qrCodeErrorCallback)
    
    // this.html5QrcodeScanner = new Html5QrcodeScanner(
    //   "reader",
    //   { fps: 10, qrbox: {width: 250, height: 250} },
    //   /* verbose= */ false);
    // try{
    // this.html5QrcodeScanner.render(this.onScanSuccess, this.onScanFailure);
    // }catch(e){

    // }
  }
  // onScanSuccess(decodedText, decodedResult) {
  //   // Handle on success condition with the decoded text or result.
  //   console.log(`Scan result: ${decodedText}`, decodedResult);
  //   console.log(decodedText)
  //   document.location.href = decodedText
  //   //(FIXME) Aiman --> dont use reload if possible
    
  // }
  // onScanFailure(errorMessage){
  //   this.html5QrcodeScanner.clear
  // }
  // ngOnDestroy():void{
  //   this.html5QrcodeScanner.clear
  // }
}