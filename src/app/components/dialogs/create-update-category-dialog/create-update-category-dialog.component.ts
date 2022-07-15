import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SaveType } from 'src/app/api_config';
import { Category } from 'src/app/model/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-create-update-category-dialog',
  templateUrl: './create-update-category-dialog.component.html',
  styleUrls: ['./create-update-category-dialog.component.css']
})
export class CreateUpdateCategoryDialogComponent implements OnInit {
  category: Category;
  action: SaveType;
  error: string;

  constructor(public dialogRef: MatDialogRef<CreateUpdateCategoryDialogComponent>,
    private categoryService: CategoryService) {
    this.category = {id: undefined, name: ""}
    this.action = SaveType.Add;
    this.error = "";
  }

  ngOnInit(): void {
  }

  onConfirm(): void {
    //Validate the users input
    if(this.category.name == "") {
      this.error = "Category name cannot be empty";
    }else {
      this.dialogRef.close(this.category);
    }
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }
}
