import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  usuarioAtual = 'Ivan Semedo - Service'

  atualizarUsuario(){
    this.usuarioAtual = "Nome atualizado"
  }
}
