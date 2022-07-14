import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  loginError: string;

  constructor(private fb:FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
    this.loginError = "";
  }

  ngOnInit(): void {
  }

  login() {
    const val = this.form.value;
    if (val.username && val.password) {
        this.authService.login(val.username, val.password).subscribe((res) => {
          this.authService.setToken(res);
          this.router.navigateByUrl('');
        }, error => {
          if(error.status == 401) {
            this.loginError = "Invalid credentials";
          }
        });
    }
  }
}
