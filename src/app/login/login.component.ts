import { Component,OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { LoginService} from "../servicelogin/login.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  users: any[] = []; // Assuming your user data structure
  loginError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService, // Adjust user name
    private router: Router
  ) { }

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  get emailControl() {
    return this.loginForm.get('email');
  }

  get passwordControl() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void { }

  onLoginClick() {
    if (this.loginForm.valid) {
      const enteredEmail = this.emailControl?.value;
      const enteredPassword = this.passwordControl?.value;

      // Check if emailControl and passwordControl are defined before accessing their values
      if (enteredEmail && enteredPassword) {
        this.loginService.login(enteredEmail, enteredPassword).subscribe(
          (data: any) => {
            this.handleLoginResponse(data);
          },
          error => {
            this.handleFailedLogin();
          }
        );
      } else {
        console.log('Email or password is null or undefined');
      }
    } else {
      console.log('Form is invalid');
    }
  }

  private handleLoginResponse(response: any) {
    if (response.message === 'Login successful') {
      this.router.navigate(['/nav/bookingmanagment']);
    } else {
      this.handleFailedLogin();
    }
  }

  private handleFailedLogin() {
    this.loginError = true;
  }

  resetForm(form: FormGroup): void {
    form.reset();
  }
}
