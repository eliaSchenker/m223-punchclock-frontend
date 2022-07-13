import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Location } from 'src/app/model/Location';

@Component({
  selector: 'app-create-update-location-dialog',
  templateUrl: './create-update-location-dialog.component.html',
  styleUrls: ['./create-update-location-dialog.component.css']
})
export class CreateUpdateLocationDialogComponent implements OnInit {
  location: Location;
  action: string;

  constructor(public dialogRef: MatDialogRef<CreateUpdateLocationDialogComponent>) {
    this.location = {id: undefined, name: ""}
    this.action = "New";
  }

  ngOnInit(): void {
  }

  onConfirm(): void {
    this.dialogRef.close(this.location);
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }
}
