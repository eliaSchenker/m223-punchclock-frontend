import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Entry } from 'src/app/model/Entry';
import { EntryService } from 'src/app/services/entry.service';
import { ConfirmDeleteDialogComponent } from '../dialogs/confirm-delete-dialog/confirm-delete-dialog.component';
import { CreateUpdateEntryDialogComponent } from '../dialogs/create-update-entry-dialog/create-update-entry-dialog.component';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  entries: Entry[];
  displayedColumns: string[] = ['id', 'checkIn', 'checkOut', 'category', 'update', 'delete'];
  constructor(private entryService: EntryService,
    private router: Router,
    private dialog: MatDialog) {
    this.entries = [];
  }

  ngOnInit(): void {
    this.entryService.getEntries().subscribe((entries) => {
      this.entries = entries;
    })
  }

  back() {
    this.router.navigateByUrl('')
  }

  addEntry() {
    const dialogRef = this.dialog.open(CreateUpdateEntryDialogComponent)
    dialogRef.componentInstance.action = "Add";
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.entryService.addEntry(result).subscribe(() => {
          window.location.reload();
        }, () => {
          //TODO Error handling
        });
      }
    });
  }

  updateEntry(entry: Entry) {
    const dialogRef = this.dialog.open(CreateUpdateEntryDialogComponent)
    dialogRef.componentInstance.entry = JSON.parse(JSON.stringify(entry));
    dialogRef.componentInstance.action = "Edit";
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.entryService.updateEntry(result).subscribe(() => {
          window.location.reload();
        }, () => {
          //TODO Error handling
        });
      }
    });
  }

  deleteEntry(id: number) {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent)
    dialogRef.componentInstance.title = "Confirm delete";
    dialogRef.componentInstance.text = "Are you sure that you want to delete the entry with the id " + id + "?";
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.entryService.deleteEntry(id).subscribe(() => {
          window.location.reload();
        }, () => {
          //TODO Error handling
        });
      }
    });
  }
}
