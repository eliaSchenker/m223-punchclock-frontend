import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/user.service';
import { ConfirmDeleteDialogComponent } from '../../dialogs/confirm-delete-dialog/confirm-delete-dialog.component';
import { CreateUpdateUserDialogComponent } from '../../dialogs/create-update-user-dialog/create-update-user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  displayedColumns: string[] = ['id', 'username', 'role', 'location', 'update', 'delete'];
  constructor(private userService: UserService,
    private router: Router,
    private dialog: MatDialog) {
    this.users = [];
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    })
  }

  back() {
    this.router.navigateByUrl('');
  }

  addUser() {
    const dialogRef = this.dialog.open(CreateUpdateUserDialogComponent)
    dialogRef.componentInstance.action = "Add";
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.userService.addUser(result).subscribe(() => {
          window.location.reload();
        }, () => {
          //TODO Error handling
        });
      }
    });
  }

  updateUser(user: User) {
    const dialogRef = this.dialog.open(CreateUpdateUserDialogComponent)
    dialogRef.componentInstance.action = "Edit";
    dialogRef.componentInstance.user = JSON.parse(JSON.stringify(user));

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.userService.updateUser(result).subscribe(() => {
          window.location.reload();
        }, () => {
          //TODO Error handling
        });
      }
    });
  }

  deleteUser(user: User) {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent)
    dialogRef.componentInstance.title = "Confirm delete";
    dialogRef.componentInstance.text = "Are you sure that you want to delete the user '" + user.username + "'?";
    dialogRef.afterClosed().subscribe(result => {
      if(result && user.id != undefined) {
        this.userService.deleteUser(user.id).subscribe(() => {
          window.location.reload();
        }, () => {
          //TODO Error handling
        });
      }
    });
  }

}
