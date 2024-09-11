// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Route, Router } from '@angular/router';

// @Component({
//   selector: 'app-login-page',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginPageComponent implements OnInit {
//   loginForm: FormGroup;
  

//   constructor(private fb: FormBuilder,private router: Router) {
//     this.loginForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]]
//     });
//   }

//   ngOnInit(): void {}

//   onSubmit(): void {
//     if (this.loginForm.valid) {
//       console.log('Form submitted', this.loginForm.value);
      
//     }
//     this.router.navigate(['/receiver-details']);
//   }
// }



import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Here you would typically call an authentication service
    if (this.username === 'admin' && this.password === 'password') {
      this.router.navigate(['/dashboard']);
    } else {
      this.error = 'Invalid username or password';
    }
  }
}