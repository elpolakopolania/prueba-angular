import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  identification = new FormControl('', [
    Validators.required, Validators.pattern("^[0-9]*$")
  ]);

  constructor() { }

  ngOnInit(): void {
  }

  getErrMsgEmail() {
    if (this.email.hasError('required')) {
      return 'El correo es requerido';
    }

    return this.email.hasError('email') ? 'No es un correo válido' : '';
  }

  getErrMsgName() {
    if (this.name.hasError('required')) {
      return 'El nombre es requerido';
    }
    return '';
  }

  getErrMsgIdentification() {
    if (this.identification.hasError('required')) {
      return 'La identificación es requerida';
    }
    return '';
  }

}
