import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './components/entry/entry.component';
import { LoginComponent } from './components/login/login.component';
import { OverviewComponent } from './components/overview/overview.component';

const routes: Routes = [
  {path: '', component: OverviewComponent},
  {path: 'login', component: LoginComponent},
  {path: 'entries', component: EntryComponent},
  //{path: 'admin/categories', component: },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
