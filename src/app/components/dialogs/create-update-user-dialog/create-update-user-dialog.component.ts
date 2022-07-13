import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-create-update-user-dialog',
  templateUrl: './create-update-user-dialog.component.html',
  styleUrls: ['./create-update-user-dialog.component.css']
})
export class CreateUpdateUserDialogComponent implements OnInit {
  user: User;
  action: string;

  constructor(public dialogRef: MatDialogRef<CreateUpdateUserDialogComponent>) {
    this.user = {id: undefined, username: "", password: "", role: "User"};
    this.action = "Add";
  }

  ngOnInit(): void {
  }

  onConfirm(): void {
    this.dialogRef.close(this.user);
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }
}
