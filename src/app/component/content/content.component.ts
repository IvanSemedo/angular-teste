import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  usuarios = [
    {id:0,
      nome:'Ivan'
    },
    {
      id:1,
      nome:'Laura'
    },
    {
      id:2,
      nome:'maria'
    },
    {
      id:3,
      nome:'Pedra'
    }
  ]
  tipoUsuario = 'Feliz sds'

}
