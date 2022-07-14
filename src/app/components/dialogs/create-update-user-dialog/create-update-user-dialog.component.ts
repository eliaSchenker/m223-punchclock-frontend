import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Location } from 'src/app/model/Location';
import { User } from 'src/app/model/User';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-create-update-user-dialog',
  templateUrl: './create-update-user-dialog.component.html',
  styleUrls: ['./create-update-user-dialog.component.css']
})
export class CreateUpdateUserDialogComponent implements OnInit {
  user: User;
  action: string;
  locations: Location[];
  selected_location_id: number;

  constructor(public dialogRef: MatDialogRef<CreateUpdateUserDialogComponent>,
    private locationService: LocationService) {
    this.user = {id: undefined, username: "", password: "", role: "User", location: {id: undefined, name:""}};
    this.action = "Add";
    this.locations = [];
    this.selected_location_id = 1;
  }

  ngOnInit(): void {
    this.locationService.getLocations().subscribe((locations) => {
      this.locations = locations;
      if(this.user.location.id != undefined) {
        this.user.location = this.locations.filter((e) => e.id === this.user.location.id)[0];
      }
    });
  }

  onConfirm(): void {
    this.dialogRef.close(this.user);
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }
}
