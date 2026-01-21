import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss',
})
export class FormulariLogin {
  username:string = '';

  password:string = '';

  constructor(private authService: AuthService) {};

  onSubmit() {
    console.log("Username: " + this.username);
    console.log("Password: " + this.password);
    this.authService.login({username: this.username, password: this.password});
  }
}
