import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SaveType } from 'src/app/api_config';
import { Location } from 'src/app/model/Location';

@Component({
  selector: 'app-create-update-location-dialog',
  templateUrl: './create-update-location-dialog.component.html',
  styleUrls: ['./create-update-location-dialog.component.css']
})
export class CreateUpdateLocationDialogComponent implements OnInit {
  location: Location;
  action: SaveType;
  error: string;

  constructor(public dialogRef: MatDialogRef<CreateUpdateLocationDialogComponent>) {
    this.location = {id: undefined, name: ""}
    this.action = SaveType.Add;
    this.error = "";
  }

  ngOnInit(): void {
  }

  onConfirm(): void {
    if(this.location.name == "") {
      this.error = "Name cannot be empty";
    }else {
      this.dialogRef.close(this.location);
    }
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }
}
