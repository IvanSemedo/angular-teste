import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reativo',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-reativo.component.html',
  styleUrl: './formulario-reativo.component.css'
})
export class FormularioReativoComponent {
enviarFormulario() {
  console.log(this.usuarioform.value.nome
    
  )
}

  usuarioform = new FormGroup({
    nome : new FormControl('',[Validators.required]),
  })

}
