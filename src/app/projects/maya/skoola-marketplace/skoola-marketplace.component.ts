import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MayaService } from '../maya.service';

@Component({
  selector: 'app-skoola-marketplace',
  templateUrl: './skoola-marketplace.component.html',
  styleUrls: ['./skoola-marketplace.component.scss']
})
export class SkoolaMarketplaceComponent implements OnInit {

  merchants: any[] = [];
  loading = true;
  errorMessage = '';

  constructor(
    private mayaService: MayaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadMerchants();
  }

  loadMerchants(): void {

    this.loading = true;
    this.errorMessage = '';

    this.mayaService
      .getCbsMerchants()
      .subscribe(
        (response: any) => {

          console.log(
            'CBS merchants:',
            response
          );

          if (
            response &&
            response.success &&
            Array.isArray(response.merchants)
          ) {
            this.merchants = response.merchants;
          }

          this.loading = false;
        },

        (error) => {

          console.error(
            'Unable to load CBS merchants:',
            error
          );

          this.errorMessage =
            'Unable to load merchants.';

          this.loading = false;
        }
      );
  }

  goBack(): void {
    this.router.navigate(['school-dashboard']);
  }

  openMerchant(merchant: any): void {
    console.log(
      'Selected merchant:',
      merchant
    );

    // We'll create the merchant/product page next.
  }
}