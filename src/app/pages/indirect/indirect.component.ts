import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indirect',
  templateUrl: './indirect.component.html',
  styleUrls: ['./indirect.component.css']
})
export class IndirectComponent implements OnInit {

  fullResponse: string = '';
  transactions: any[] = [];
  isMerchant: boolean = false;

  // FPX code-to-message map
  fpxStatusMap: { [code: string]: string } = {
    '00': 'Approved',
    '03': 'Invalid Merchant',
    '05': 'Invalid Seller Or Acquiring Bank Code',
    '09': 'Transaction Pending',
    '12': 'Invalid Transaction',
    '13': 'Invalid Amount',
    '14': 'Invalid Buyer Account',
    '20': 'Invalid Response',
    '30': 'Format Error',
    '31': 'Invalid Bank',
    '39': 'No Credit Account',
    '45': 'Duplicate Seller Order Number',
    '46': 'Invalid Seller Exchange Or Seller',
    '47': 'Invalid Currency',
    '48': 'Maximum Transaction Limit Exceeded',
    '49': 'Merchant Specific Limit Exceeded',
    '50': 'Invalid Seller for Merchant Specific Limit',
    '51': 'Insufficient Funds',
    '53': 'No Buyer Account Number',
    '57': 'Transaction Not Permitted',
    '58': 'Transaction To Merchant Not Permitted',
    '70': 'Invalid Serial Number',
    '76': 'Transaction Not Found',
    '77': 'Invalid Buyer Name Or Buyer ID',
    '78': 'Decryption Failed',
    '79': 'Host Decline When Down',
    '80': 'Buyer Cancel Transaction',
    '83': 'Invalid Transaction Model',
    '84': 'Invalid Transaction Type',
    '85': 'Internal Error At Bank System',
    '87': 'Debit Failed Exception Handling',
    '88': 'Credit Failed Exception Handling',
    '89': 'Transaction Not Received Exception Handling',
    '90': 'Bank Internet Banking Unavailable',
    '92': 'Invalid Buyer Bank',
    '96': 'System Malfunction',
    '98': 'MAC Error',
    '99': 'Pending Authorization (Applicable for B2B model)',
    'BB': 'Blocked Bank',
    'BC': 'Transaction Cancelled By Customer',
    'DA': 'Invalid Application Type',
    'DB': 'Invalid Email Format',
    'DC': 'Invalid Maximum Frequency',
    'DD': 'Invalid Frequency Mode',
    'DE': 'Invalid Expiry Date',
    'DF': 'Invalid e-Mandate Buyer Bank ID',
    'FE': 'Internal Error',
    'OE': 'Transaction Rejected As Not In FPX Operating Hours',
    'OF': 'Transaction Timeout',
    'SB': 'Invalid Acquiring Bank Code',
    'XA': 'Invalid Source IP Address (Applicable for B2B2 model)',
    'XB': 'Invalid Seller Exchange IP',
    'XC': 'Seller Exchange Encryption Error',
    'XE': 'Invalid Message',
    'XF': 'Invalid Number Of Orders',
    'XI': 'Invalid Seller Exchange',
    'XM': 'Invalid FPX Transaction Model',
    'XN': 'Transaction Rejected Due To Duplicate Seller Exchange Order Number',
    'XO': 'Duplicate Exchange Order Number',
    'XS': 'Seller Does Not Belong To Exchange',
    'XT': 'Invalid Transaction Type',
    'XW': 'Seller Exchange Date Difference Exceeded',
    '1A': 'Buyer Session Timeout At Internet Banking Login Page',
    '1B': 'Buyer Failed To Provide The Necessary Info To Login To Internet Banking Login Page',
    '1C': 'Buyer Choose Cancel At Login Page',
    '1D': 'Buyer Session Timeout At Account Selection Page',
    '1E': 'Buyer Failed To Provide The Necessary Info At Account Selection Page',
    '1F': 'Buyer Choose Cancel At Account Selection Page',
    '1G': 'Buyer Session Timeout At TAC Request Page',
    '1H': 'Buyer Failed To Provide The Necessary Info At TAC Request Page',
    '1I': 'Buyer Choose Cancel At TAC Request Page',
    '1J': 'Buyer Session Timeout At Confirmation Page',
    '2A': 'Transaction Lower Than Min limit RM1 B2C and RM2 B2B',
    '2B': 'Transaction Exceed Transaction Amount RM1000000 for B2B',
    '2C': 'Transaction Exceed Transaction Amount RM30K for B2C'
  };

  ngOnInit(): void {
    const query = window.location.href.split('?')[1];
    if (!query) return;

    this.fullResponse = query;

    const params = new URLSearchParams(query);

    const code = params.get('fpx_debitAuthCode') || '';
    const statusText = this.fpxStatusMap[code] || 'Unknown';

    const transaction = {
      status: statusText,
      txnId: params.get('fpx_fpxTxnId') || '-',
      sellerOrder: params.get('fpx_sellerOrderNo') || '-',
      datetime: this.formatDateTime(params.get('fpx_fpxTxnTime')),
      bank: params.get('fpx_buyerBankId') || '-',
      amount: params.get('fpx_txnAmount') || '-',
      note: decodeURIComponent(params.get('fpx_buyerName') || '-')
    };

    this.transactions.push(transaction);
  }

  private formatDateTime(dt: string | null): string {
    if (!dt || dt.length < 14) return '-';
    return `${dt.substring(0, 4)}-${dt.substring(4, 6)}-${dt.substring(6, 8)} ${dt.substring(8, 10)}:${dt.substring(10, 12)}:${dt.substring(12, 14)}`;
  }
}
