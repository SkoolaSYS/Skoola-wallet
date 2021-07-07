import { Component, Input, OnInit } from '@angular/core';
import { Renderer2, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";
@Component({
  selector: 'app-qr-view',
  templateUrl: './qr-view.component.html'
})

export class qrViewComponent implements OnInit {
  @Input() qrview: boolean = false;
  constructor(private renderer2: Renderer2, @Inject(DOCUMENT) private _document) {
    this.loadScripts();
  }

  ngOnInit(): void {
  }

  loadScripts() {
    const node = document.createElement('script');
    node.src = './assets/qr-scanner.js'
    node.type = 'text/javascript';
    node.async = false;
    document.getElementsByTagName('head')[0].appendChild(node);
 }
}