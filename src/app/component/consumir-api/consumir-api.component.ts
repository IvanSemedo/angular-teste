import { Component, inject } from '@angular/core';
import { IPost, RequisicoesService } from '../../service/requisicoes.service';

@Component({
  selector: 'app-consumir-api',
  imports: [],
  templateUrl: './consumir-api.component.html',
  styleUrl: './consumir-api.component.css'
})

export class ConsumirAPIComponent {

  postList: IPost[] =  [];

  readonly _http = inject(RequisicoesService);
  ngOnInit(){
    this._http.getposts().subscribe(
      (response)=>{
          console.log('response => ' + response)
          this.postList = response
      }
    )
  }

}
