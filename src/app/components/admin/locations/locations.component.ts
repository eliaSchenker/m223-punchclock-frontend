import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Location } from 'src/app/model/Location';
import { LocationService } from 'src/app/services/location.service';
import { ConfirmDeleteDialogComponent } from '../../dialogs/confirm-delete-dialog/confirm-delete-dialog.component';
import { CreateUpdateLocationDialogComponent } from '../../dialogs/create-update-location-dialog/create-update-location-dialog.component';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locations: Location[];
  displayedColumns: string[] = ['id', 'name', 'update', 'delete'];
  constructor(private locationService: LocationService,
    private router: Router,
    private dialog: MatDialog) {
    this.locations = [];
  }

  ngOnInit(): void {
    this.locationService.getLocations().subscribe((locations) => {
      this.locations = locations;
    })
  }

  back() {
    this.router.navigateByUrl('');
  }

  addLocation() {
    const dialogRef = this.dialog.open(CreateUpdateLocationDialogComponent)
    dialogRef.componentInstance.action = "Add";
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.locationService.addLocation(result).subscribe(() => {
          window.location.reload();
        }, () => {
          //TODO Error handling
        });
      }
    });
  }

  updateLocation(location: Location) {
    const dialogRef = this.dialog.open(CreateUpdateLocationDialogComponent)
    dialogRef.componentInstance.action = "Edit";
    dialogRef.componentInstance.location = JSON.parse(JSON.stringify(location));

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.locationService.updateLocation(result).subscribe(() => {
          window.location.reload();
        }, () => {
          //TODO Error handling
        });
      }
    });
  }

  deleteLocation(location: Location) {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent)
    dialogRef.componentInstance.title = "Confirm delete";
    dialogRef.componentInstance.text = "Are you sure that you want to delete the location '" + location.name + "'?";
    dialogRef.afterClosed().subscribe(result => {
      if(result && location.id != undefined) {
        this.locationService.deleteLocation(location.id).subscribe(() => {
          window.location.reload();
        }, () => {
          //TODO Error handling
        });
      }
    });
  }

}
