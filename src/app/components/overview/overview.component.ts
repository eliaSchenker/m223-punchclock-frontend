import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  user?:User;

  constructor(private router: Router) {
    this.user = {role: "Admin", username:"Test", id:1}
  }

  ngOnInit(): void {
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
}
