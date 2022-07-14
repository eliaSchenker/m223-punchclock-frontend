import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { EntryComponent } from './components/entry/entry.component';
import { OverviewComponent } from './components/overview/overview.component';
import { UsersComponent } from './components/admin/users/users.component';
import { LocationsComponent } from './components/admin/locations/locations.component';
import { CategoriesComponent } from './components/admin/categories/categories.component';
import { CreateUpdateEntryDialogComponent } from './components/dialogs/create-update-entry-dialog/create-update-entry-dialog.component';
import { CreateUpdateCategoryDialogComponent } from './components/dialogs/create-update-category-dialog/create-update-category-dialog.component';
import { CreateUpdateLocationDialogComponent } from './components/dialogs/create-update-location-dialog/create-update-location-dialog.component';
import { CreateUpdateUserDialogComponent } from './components/dialogs/create-update-user-dialog/create-update-user-dialog.component';
import { ConfirmDeleteDialogComponent } from './components/dialogs/confirm-delete-dialog/confirm-delete-dialog.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

/* Angular Material */
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table'
import { AuthInterceptor } from './interceptors/auth-interceptor.interceptor';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EntryComponent,
    OverviewComponent,
    UsersComponent,
    LocationsComponent,
    CategoriesComponent,
    CreateUpdateEntryDialogComponent,
    CreateUpdateCategoryDialogComponent,
    CreateUpdateLocationDialogComponent,
    CreateUpdateUserDialogComponent,
    ConfirmDeleteDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

    /* Angular material */
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
