import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/admin/categories/categories.component';
import { LocationsComponent } from './components/admin/locations/locations.component';
import { UsersComponent } from './components/admin/users/users.component';
import { EntryComponent } from './components/entry/entry.component';
import { LoginComponent } from './components/login/login.component';
import { OverviewComponent } from './components/overview/overview.component';

const routes: Routes = [
  {path: '', component: OverviewComponent},
  {path: 'login', component: LoginComponent},
  {path: 'entries', component: EntryComponent},
  {path: 'admin/categories', component: CategoriesComponent},
  {path: 'admin/locations', component: LocationsComponent},
  {path: 'admin/users', component: UsersComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
