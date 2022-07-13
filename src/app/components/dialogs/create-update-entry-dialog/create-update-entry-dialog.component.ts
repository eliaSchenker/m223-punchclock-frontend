import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Category } from 'src/app/model/Category';
import { Entry } from 'src/app/model/Entry';

@Component({
  selector: 'app-create-update-entry-dialog',
  templateUrl: './create-update-entry-dialog.component.html',
  styleUrls: ['./create-update-entry-dialog.component.css']
})
export class CreateUpdateEntryDialogComponent implements OnInit {
  entry: Entry;
  categories: Category[];
  action: string;

  constructor(public dialogRef: MatDialogRef<CreateUpdateEntryDialogComponent>) {
    this.entry = {id: undefined, checkIn: new Date(), checkout: new Date(), category: {id: 1, name: "Test"}}
    this.categories = [];
    this.action = "New";
  }

  ngOnInit(): void {
  }

  onConfirm(): void {
    this.dialogRef.close(this.entry);
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }
}
