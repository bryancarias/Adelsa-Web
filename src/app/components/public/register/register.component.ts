import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  data = {
    I_ROL: 'admin',
    I_CORREO_ELECTRONICO: '',
    I_CONTRASENA: '',
    I_PRIMER_NOMBRE: '',
    I_SEGUNDO_NOMBRE: '',
    I_TERCER_NOMBRE: '',
    I_PRIMER_APELLIDO: '',
    I_SEGUNDO_APELLIDO: '',
    I_APELLDO_CASADA: '',
    I_NACIONALDAD: '',
    I_FECHA_NACIMIENTO: '',
    I_PASAPORTE: '',
    I_FECHA_EMICION_PASAPORTE: '',
    I_FECHA_CADUCIDAD_PASAPORTE: '',
    I_NIT: '',
    I_GENERO: '',
    I_ESTADO_CIVIL: '',
    I_NUMERO_CUENTA_BANCARIA: '',
    I_DPI: ''
    };
    errorMessage = '';
  constructor(private authServices: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  async register() {
    const validar = this.authServices.register(this.data);

    if (validar) {
      this.router.navigate(['/loan']);
    } else {
      this.errorMessage = 'Contraseña o correo no son correctos';
      console.log(this.errorMessage);
    }
  }

}
