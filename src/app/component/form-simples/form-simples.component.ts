import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-simples',
  imports: [FormsModule],
  templateUrl: './form-simples.component.html',
  styleUrl: './form-simples.component.css'
})
export class FormSimplesComponent {
  nomeUsuario = '';
  enviarFormulario(userForm: any) {
    console.log(this.nomeUsuario)
    console.log(userForm)
  }
} 
