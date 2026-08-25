import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCurrencyFormat]'
})
export class CurrencyFormatDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    // Remove non-numeric characters except for decimal point
    const cleanValue = value.replace(/[^0-9.]/g, '');
    // Format the value as currency
    const formattedValue = this.formatCurrency(cleanValue);
    // Update the input value with the formatted value
    this.el.nativeElement.value = formattedValue;
  }

  private formatCurrency(value: string): string {
    // If the value is empty, return it as is
    if (!value) {
      return '';
    }
    // Remove non-numeric characters except for decimal point
    const cleanValue = value.replace(/[^0-9]/g, '');
    // Extract the integral and decimal parts
    let integralPart = cleanValue.substring(0, cleanValue.length - 2);
    let decimalPart = cleanValue.substring(cleanValue.length - 2);
    // Format the currency value with a dot between integral and decimal parts
    if (integralPart.length > 2) {
      integralPart = integralPart.replace(/^0+/, '');
    }
    integralPart = integralPart.padStart(2, '0');
    if (integralPart === '') {
      integralPart = '0';
    }
    return `RM ${integralPart}.${decimalPart}`;
}

}
