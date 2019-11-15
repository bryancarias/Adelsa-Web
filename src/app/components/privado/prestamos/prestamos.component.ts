import { Component, OnInit } from '@angular/core';
import { PrestamosService } from '../../../services/prestamos.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.scss']
})
export class PrestamosComponent implements OnInit {
  
  constructor(private prestamosServices: PrestamosService,
              private formBuilder: FormBuilder) { }

  hoy = new Date();
  dia = this.hoy.getDate();
  mes = this.hoy.getMonth() + 1;
  años = this.hoy.getFullYear();
  fecha = String(`${this.años}-${this.mes}-${this.dia}`);
  fechaF = String( this.hoy.setDate(this.hoy.getDate() + 45));

  data = {
    id_persona: '6',
    tarjeta_debito:  '',
    resibo_bancario: '',
    prestamo:  '',
    fecha_vencimiento: this.fechaF,
    fecha_creacion_prestamo: this.fecha,
    estado : 'd',
  };

  uploadedFiles: Array < File > ;

  uploadForm: FormGroup;

  fileChange(element) {
    if (element.target.files.length > 0) {
      const file = element.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }
  }

  fileChange1(element) {
    if (element.target.files.length > 0) {
      const file = element.target.files[0];
      this.uploadForm.get('profile1').setValue(file);
    }
  }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      profile: [''],
      profile1: ['']
    });
  }

  onSubmit() {

    const formData = new FormData();
    formData.append('images[]', this.uploadForm.get('profile').value);
    formData.append('images[]', this.uploadForm.get('profile1').value);
    formData.append('id_persona', this.data.id_persona);
    formData.append('tarjeta_debito', this.data.tarjeta_debito);
    formData.append('prestamo', this.data.prestamo);
    formData.append('fecha_vencimiento', this.data.fecha_vencimiento);
    formData.append('fecha_creacion_prestamo', this.data.fecha_creacion_prestamo);
    formData.append('estado', this.data.estado);

    this.prestamosServices.insert(formData).subscribe(console.log);
  }

}
