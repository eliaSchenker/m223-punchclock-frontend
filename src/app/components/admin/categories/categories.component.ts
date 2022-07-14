import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/Category';
import { CategoryService } from 'src/app/services/category.service';
import { ConfirmDeleteDialogComponent } from '../../dialogs/confirm-delete-dialog/confirm-delete-dialog.component';
import { CreateUpdateCategoryDialogComponent } from '../../dialogs/create-update-category-dialog/create-update-category-dialog.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];
  displayedColumns: string[] = ['id', 'name', 'update', 'delete'];
  constructor(private categoryService: CategoryService,
    private router: Router,
    private dialog: MatDialog) {
    this.categories = [];
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    })
  }

  back() {
    this.router.navigateByUrl('')
  }

  addCategory() {
    const dialogRef = this.dialog.open(CreateUpdateCategoryDialogComponent)
    dialogRef.componentInstance.action = "New";

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.categoryService.addCategory(result).subscribe(() => {
          window.location.reload();
        }, () => {
          //TODO Error handling
        });
      }
    });
  }

  updateCategory(category: Category) {
    const dialogRef = this.dialog.open(CreateUpdateCategoryDialogComponent)
    dialogRef.componentInstance.action = "Edit";
    dialogRef.componentInstance.category = JSON.parse(JSON.stringify(category)); //Create a deep copy of the category (to avoid incorrect binding)

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.categoryService.updateCategory(result).subscribe(() => {
          window.location.reload();
        }, () => {
          //TODO Error handling
        });
      }
    });
  }

  deleteCategory(category: Category) {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent)
    dialogRef.componentInstance.title = "Confirm delete";
    dialogRef.componentInstance.text = "Are you sure that you want to delete the category '" + category.name + "'?";
    dialogRef.afterClosed().subscribe(result => {
      if(result && category.id != undefined) {
        this.categoryService.deleteCategory(category.id).subscribe(() => {
          window.location.reload();
        }, () => {
          //TODO Error handling
        });
      }
    });
  }
}
