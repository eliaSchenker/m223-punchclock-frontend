import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  user?:User;

  constructor(private userService: UserService, private router: Router, private authService: AuthService) {
    this.user = {role: "", username:"", id: 1, location: {id: undefined, name: ""}}
  }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((user) => {
      this.user = user;
    });
  }

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

  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }
}
