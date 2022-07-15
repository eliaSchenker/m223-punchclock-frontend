import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SaveType } from 'src/app/api_config';
import { Category } from 'src/app/model/Category';
import { Entry } from 'src/app/model/Entry';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-create-update-entry-dialog',
  templateUrl: './create-update-entry-dialog.component.html',
  styleUrls: ['./create-update-entry-dialog.component.css']
})
export class CreateUpdateEntryDialogComponent implements OnInit {
  public entry: Entry;
  categories: Category[];
  action: SaveType;
  error: string;

  constructor(public dialogRef: MatDialogRef<CreateUpdateEntryDialogComponent>,
    private categoryService: CategoryService) {
    this.entry = {id: undefined, checkIn: undefined, checkOut: undefined, category: {id: undefined, name: ""}}
    this.categories = [];
    this.action = SaveType.Add;
    this.error = "";
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((categories)=> {
      this.categories = categories;
      if(this.entry.category.id != undefined) {
        this.entry.category = this.categories.filter((e) => e.id === this.entry.category.id)[0];
      }
    })
  }

  onConfirm(): void {
    if(this.entry.category.id == undefined) {
      this.error = "Category cannot be empty";
    }else if(this.entry.checkIn == undefined) {
      this.error = "CheckIn cannot be empty";
    }else if(this.entry.checkOut == undefined) {
      this.error = "CheckOut cannot be empty";
    }else{
      this.dialogRef.close(this.entry);
    }
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }
}
