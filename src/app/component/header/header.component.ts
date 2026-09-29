import { Component, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../../service/storage.service';

@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

atualizarUsuarioNoService() {
  this._storageService.atualizarUsuario()
}

  //Injetar o service no component
  readonly _storageService = inject(StorageService)
  // Forma mais antiga para inserir o service no component
  /*  constructor(private _storageService:StorageService){
 
   } */

  // Informação sera recebido do component pai
  @Input() tituloVindoPai: string = '';

  // Informação sera enviado ao component pai
  @Output() textEmit = new EventEmitter<string>();

  emitirValor() {
    this.textEmit.emit('Valor enviado do Comp Filho')
  }


  tituloHeader = 'Youtube'
  valorH2 = 'Meu Subtitulo'
  habilatarbutao = true
  valorInput = "Valor Inicial"
  aplicarclass = false
  estiloCor = 'orange'

  retornarSubTitulo() {

    return "Ola eu sou o subtitulo";
  }
  atualizarTitulo() {
    //this.tituloHeader = "Youtube Atualizado"
    //console.log(this.valorInput)
    //this.aplicarclass = !this.aplicarclass
    this.estiloCor = 'red'
  }
}
