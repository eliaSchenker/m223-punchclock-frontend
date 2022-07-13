import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Category } from 'src/app/model/Category';

@Component({
  selector: 'app-create-update-category-dialog',
  templateUrl: './create-update-category-dialog.component.html',
  styleUrls: ['./create-update-category-dialog.component.css']
})
export class CreateUpdateCategoryDialogComponent implements OnInit {
  category: Category;
  action: string;

  constructor(public dialogRef: MatDialogRef<CreateUpdateCategoryDialogComponent>) {
    this.category = {id: undefined, name: ""}
    this.action = "New";
  }

  ngOnInit(): void {
  }

  onConfirm(): void {
    this.dialogRef.close(this.category);
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }
}
