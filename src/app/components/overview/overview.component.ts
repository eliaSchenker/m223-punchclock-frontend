import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

/**
 * The component displayed on the index page
 * Shows various navigation options (depending on Role of the user, administrators get access
 * to specific admin functionality (e.g adding categories))
 * Author: Elia Schenker
 * Last change: 15.07.2022
 */
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  user?:User; //Represents the logged in user

  constructor(private userService: UserService, private router: Router, private authService: AuthService) {
    this.user = {role: "", username:"", id: 1, location: {id: undefined, name: ""}}
  }

  ngOnInit(): void {
    //Load the current user using the UserService
    this.userService.getCurrentUser().subscribe((user) => {
      this.user = user;
    });
  }

  /* Various navigation functions */

  navigateEntries() {
    this.router.navigateByUrl("/entries");
  }

  navigateCategories() {
    this.router.navigateByUrl("/admin/categories");
  }

  navigateLocations() {
    this.router.navigateByUrl("/admin/locations");
  }

  navigateUsers() {
    this.router.navigateByUrl("/admin/users");
  }

  /**
   * Logs out the user by using the AuthService
   */
  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }
}
