import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SaveType } from 'src/app/api_config';
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
  action: SaveType;
  error: string;
  locations: Location[];

  constructor(public dialogRef: MatDialogRef<CreateUpdateUserDialogComponent>,
    private locationService: LocationService) {
    this.user = {id: undefined, username: "", password: "", role: "User", location: {id: undefined, name:""}};
    this.error = "";
    this.action = SaveType.Add;
    this.locations = [];
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
    if(this.user.username == "") {
      this.error = "Username cannot be empty";
    }else if(this.action == SaveType.Add && this.user.password == "") {
      //If the Admin is creating a new user the password cannot be blank
      this.error = "Password cannot be empty"
    }else if(this.user.role == "") {
      this.error = "Role cannot be empty";
    }else if(this.user.location.id == undefined) {
      this.error = "Location cannot be empty";
    }else {
      this.dialogRef.close(this.user);
    }
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }
}
