import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss',
})
export class FormulariLogin {
  username:string = '';

  password:string = '';

  loginData() {
    console.log("Username: " + this.username);
    console.log("Password: " + this.password);
  }
}
