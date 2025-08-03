import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';
import { Services } from 'src/app/services/service';
// danieal
@Component({
  selector: 'app-bankload-fpx',
  templateUrl: './bankload-fpx.component.html'
})
export class BankloadFpxComponent implements OnInit {
  showForm = true;
  amount?: number;
  quantity = 1;
  fee = 1;
  productDesc = 'E-Wallet KOMEPS D-8P Top-Up';
  isButtonDisabled = true;
  exOrderNumber = '';
  orderNumber = '';
  selectedBankId = '';
  email = '';
  bankType = 'B2C';
  agree1 = false;
  agree2 = false;

  private bankListB2B = [
    { bank_id: 'ABB0232', bank_name: 'Affin Bank Berhad', bank_display: 'Affin Bank' },
    { bank_id: 'ABB0235', bank_name: 'Affin Bank Berhad', bank_display: 'B2B AFFINMAX' },
    { bank_id: 'ABMB0213', bank_name: 'Alliance Bank Malaysia Berhad', bank_display: 'Alliance Bank (Business)' },
    { bank_id: 'AGRO02', bank_name: 'BANK PERTANIAN MALAYSIA BERHAD (AGROBANK)', bank_display: 'AGRONetBIZ' },
    { bank_id: 'AMBB0208', bank_name: 'AmBank Malaysia Berhad', bank_display: 'AmBank' },
    { bank_id: 'BIMB0340', bank_name: 'Bank Islam Malaysia Berhad', bank_display: 'Bank Islam' },
    { bank_id: 'BMMB0342', bank_name: 'Bank Muamalat Malaysia Berhad', bank_display: 'Bank Muamalat' },
    { bank_id: 'BNP003', bank_name: 'BNP Paribas Malaysia Berhad', bank_display: 'BNP Paribas' },
    { bank_id: 'BCBB0235', bank_name: 'CIMB Bank Berhad', bank_display: 'CIMB Bank' },
    { bank_id: 'CIT0218', bank_name: 'CITI Bank Berhad', bank_display: 'Citibank Corporate Banking' },
    { bank_id: 'DBB0199', bank_name: 'Deutsche Bank Berhad', bank_display: 'Deutsche Bank' },
    { bank_id: 'HLB0224', bank_name: 'Hong Leong Bank Berhad', bank_display: 'Hong Leong Bank' },
    { bank_id: 'HSBC0223', bank_name: 'HSBC Bank Malaysia Berhad', bank_display: 'HSBC Bank' },
    { bank_id: 'BKRM0602', bank_name: 'Bank Kerjasama Rakyat Malaysia Berhad', bank_display: 'i-bizRAKYAT' },
    { bank_id: 'KFH0346', bank_name: 'Kuwait Finance House (Malaysia) Berhad', bank_display: 'KFH' },
    { bank_id: 'MBB0228', bank_name: 'Malayan Banking Berhad (M2E)', bank_display: 'Maybank2E' },
    { bank_id: 'OCBC0229', bank_name: 'OCBC Bank Malaysia Berhad', bank_display: 'OCBC Bank' },
    { bank_id: 'PBB0233', bank_name: 'Public Bank Berhad', bank_display: 'Public Bank PBe' },
    { bank_id: 'PBB0234', bank_name: 'Public Bank Enterprise', bank_display: 'Public Bank PB enterprise' },
    { bank_id: 'RHB0218', bank_name: 'RHB Bank Berhad', bank_display: 'RHB Bank' },
    { bank_id: 'TEST0021', bank_name: 'SBI Bank A SBI', bank_display: 'SBI Bank A' },
    { bank_id: 'TEST0022', bank_name: 'SBI Bank B SBI', bank_display: 'SBI Bank B' },
    { bank_id: 'TEST0023', bank_name: 'SBI Bank C SBI', bank_display: 'SBI Bank C' },
    { bank_id: 'SCB0215', bank_name: 'Standard Chartered Bank', bank_display: 'Standard Chartered' },
    { bank_id: 'UOB0228', bank_name: 'United Overseas Bank B2B Regional', bank_display: 'UOB Regional' }
  ];

  private bankListB2C = [
    { bank_id: 'ABB0234', bank_name: 'Affin Bank Berhad', bank_display: 'B2C - Test ID Affin B2C - Test ID' },
    { bank_id: 'ABB0233', bank_name: 'Affin Bank Berhad', bank_display: 'Affin Bank' },
    { bank_id: 'ABMB0212', bank_name: 'Alliance Bank Malaysia Berhad', bank_display: 'Alliance Bank (Personal)' },
    { bank_id: 'AGRO01', bank_name: 'BANK PERTANIAN MALAYSIA BERHAD (AGROBANK)', bank_display: 'AGRONet' },
    { bank_id: 'AMBB0209', bank_name: 'AmBank Malaysia Berhad', bank_display: 'AmBank' },
    { bank_id: 'BIMB0340', bank_name: 'Bank Islam Malaysia Berhad', bank_display: 'Bank Islam' },
    { bank_id: 'BMMB0341', bank_name: 'Bank Muamalat Malaysia Berhad', bank_display: 'Bank Muamalat' },
    { bank_id: 'BKRM0602', bank_name: 'Bank Kerjasama Rakyat Malaysia Berhad', bank_display: 'Bank Rakyat' },
    { bank_id: 'BOCM01', bank_name: 'Bank Of China (M) Berhad', bank_display: 'Bank Of China' },
    { bank_id: 'BSN0601', bank_name: 'Bank Simpanan Nasional', bank_display: 'BSN' },
    { bank_id: 'BCBB0235', bank_name: 'CIMB Bank Berhad', bank_display: 'CIMB Clicks' },
    { bank_id: 'CIT0219', bank_name: 'CITI Bank Berhad', bank_display: 'Citibank' },
    { bank_id: 'HLB0224', bank_name: 'Hong Leong Bank Berhad', bank_display: 'Hong Leong Bank' },
    { bank_id: 'HSBC0223', bank_name: 'HSBC Bank Malaysia Berhad', bank_display: 'HSBC Bank' },
    { bank_id: 'KFH0346', bank_name: 'Kuwait Finance House (Malaysia) Berhad', bank_display: 'KFH' },
    { bank_id: 'MBB0228', bank_name: 'Malayan Banking Berhad (M2E)', bank_display: 'Maybank2E' },
    { bank_id: 'MB2U0227', bank_name: 'Malayan Banking Berhad (M2U)', bank_display: 'Maybank2U' },
    { bank_id: 'OCBC0229', bank_name: 'OCBC Bank Malaysia Berhad', bank_display: 'OCBC Bank' },
    { bank_id: 'PBB0233', bank_name: 'Public Bank Berhad', bank_display: 'Public Bank' },
    { bank_id: 'RHB0218', bank_name: 'RHB Bank Berhad', bank_display: 'RHB Bank' },
    { bank_id: 'TEST0021', bank_name: 'SBI Bank A SBI', bank_display: 'SBI Bank A' },
    { bank_id: 'TEST0022', bank_name: 'SBI Bank B SBI', bank_display: 'SBI Bank B' },
    { bank_id: 'TEST0023', bank_name: 'SBI Bank C SBI', bank_display: 'SBI Bank C' },
    { bank_id: 'SCB0216', bank_name: 'Standard Chartered Bank', bank_display: 'Standard Chartered' },
    { bank_id: 'UOB0226', bank_name: 'United Overseas Bank', bank_display: 'UOB Bank' },
    { bank_id: 'UOB0229', bank_name: 'United Overseas Bank - B2C Test', bank_display: 'UOB Bank - Test ID' }
  ];

  constructor(
    private services: Services,
    private router: Router,
    private spinner: NgxSpinnerService,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit(): Promise<void> {
    this.spinner.hide();
    await this.services.currentUser;
    this.generateOrderNumbers();
    this.cdr.detectChanges();
  }

  get bankList() {
    return this.bankType === 'B2B' ? this.bankListB2B : this.bankListB2C;
  }

  toggleButtonState(): void {
    this.isButtonDisabled = !this.isButtonDisabled;
  }

  displaySummary() {
    this.generateOrderNumbers();
    this.showForm = false;
  }

  cancelOrder() {
    this.showForm = true;
    this.isButtonDisabled = true;
  }

  fillInput(value: string): void {
    this.amount = +value;
  }

  verifyProceed(): void {
    this.isButtonDisabled = !(this.agree1 && this.agree2);
  }

  async proceedToFpxPayment() {
    if (!this.isFormValid()) {
      this.showErrorDialog('Please fill all required fields');
      return;
    }

    const total = (this.amount + this.fee).toFixed(2);

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://www.komeps-fpx.com/receivefpx.asp?client_id=1';

    const formFields = {
      fpx_buyerbankid: this.selectedBankId,
      fpx_sellerOrderNo: this.orderNumber,
      fpx_sellerExOrderNo: this.exOrderNumber,
      fpx_buyerEmail: this.email,
      fpx_productDesc: this.productDesc,
      fpx_txnAmount: total,
      payment_mode: this.bankType
    };

    for (const [key, value] of Object.entries(formFields)) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
  }

  private isFormValid(): boolean {
    return !!(this.amount && this.selectedBankId && this.email && this.agree1 && this.agree2);
  }

  private showErrorDialog(message: string): void {
    this.dialog.open(AlertDialogComponent, {
      data: { title: 'Error', message }
    });
  }

  private generateOrderNumbers(): void {
    this.exOrderNumber = this.generateRandom12Digit();
    this.orderNumber = this.generateRandom12Digit();
    while (this.orderNumber === this.exOrderNumber) {
      this.orderNumber = this.generateRandom12Digit();
    }
  }

  private generateRandom12Digit(): string {
    return Array.from({ length: 12 }, () => Math.floor(Math.random() * 10)).join('');
  }
}
