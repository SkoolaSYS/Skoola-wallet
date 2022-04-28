import { Component, Input, OnInit } from '@angular/core';
import { Html5Qrcode } from 'html5-qrcode';
import { Router } from '@angular/router';
import { Services } from 'src/app/services/service';
import { Utility } from 'src/utils';
@Component({
  selector: 'app-qr-view',
  templateUrl: './qr-view.component.html'
})
export class qrViewComponent implements OnInit{
  @Input() qrview: boolean = false;

  constructor(private router:Router, private service:Services) {
  }

  async ngOnInit(): Promise<void> {
    let html5QrCode = new Html5Qrcode("reader");
    const qrCodeSuccessCallback = async (decodedText, decodedResult):Promise<void> => {
      html5QrCode.stop()
      try{
        await this.service.decrypt({text : decodedText}).toPromise()
        this.service.qrData = JSON.parse(this.service.qrData.decryptText)
        this.router.navigate([this.service.qrData.route])
      }catch{
        this.router.navigate(['invalid-qr-link']);
      }
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
  //   Utility.log(`Scan result: ${decodedText}`, decodedResult);
  //   Utility.log(decodedText)
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