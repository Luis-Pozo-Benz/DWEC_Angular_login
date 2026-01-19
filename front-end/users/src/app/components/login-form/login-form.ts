import { Component } from '@angular/core';

@Component({
  selector: 'app-formulari-login',
  imports: [],
  templateUrl: './formulari-login.html',
  styleUrl: './formulari-login.scss',
})
export class FormulariLogin {
  username:string = '';

  password:string = '';

  loginData() {
    console.log(this.username);
    console.log(this.password);
  }
}
