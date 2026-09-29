import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { ContentComponent } from './component/content/content.component';
import { ConsumirAPIComponent } from './component/consumir-api/consumir-api.component';
import { FormSimplesComponent } from './component/form-simples/form-simples.component';
import { FormularioReativoComponent } from './component/formulario-reativo/formulario-reativo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ContentComponent, ConsumirAPIComponent, FormSimplesComponent, FormularioReativoComponent, RouterLinkWithHref],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  receberValor(texto: string) {
    console.log('valor recebido ' + texto)
  }
  title = 'Angular app';/*  */
}
