import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css']
})
export class AlertDialogComponent implements OnInit {
  message: string;

  constructor(private dialogRef: MatDialogRef<AlertDialogComponent>, @Inject(MAT_DIALOG_DATA) data: any) {
    this.message = data.message;
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
  
}
