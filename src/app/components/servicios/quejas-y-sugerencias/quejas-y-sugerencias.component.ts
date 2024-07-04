import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-quejas-y-sugerencias',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './quejas-y-sugerencias.component.html',
  styleUrl: './quejas-y-sugerencias.component.css'
})
export class QuejasYSugerenciasComponent {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      departamento: ['', Validators.required],
      cedula: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      nombre: [''],
      apellido: [''],
      correo: ['', [Validators.required, Validators.email]],
      queja: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      Swal.fire({
        icon: "success",
        title: "La información ha sido enviada.",
        showConfirmButton: false,
        timer: 1500
      }
      ), setTimeout(() => {
        this.router.navigate(['/'])

      }, 1500);;

    } else {
      this.validateAllFormFields(this.form);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      } else {
        control?.markAsTouched({ onlySelf: true });
      }
    });
  }




}
