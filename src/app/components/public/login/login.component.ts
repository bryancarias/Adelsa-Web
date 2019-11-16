import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data = {
    email: '',
    password: ''
  };

  errorMessage = '';
  constructor(private authService: AuthService,
              private router: Router) {}

  ngOnInit() {
  }

  async login( form: NgForm) {
    const validar = await this.authService.login(this.data);

    if (validar) {
      this.router.navigate(['/loan']);
    } else {
      this.errorMessage = 'Contraseña o correo no son correctos';
      console.log(this.errorMessage);
    }
  }
}
