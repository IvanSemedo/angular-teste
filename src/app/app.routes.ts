import { Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { ContentComponent } from './component/content/content.component';
import { FormSimplesComponent } from './component/form-simples/form-simples.component';
import { FormularioReativoComponent } from './component/formulario-reativo/formulario-reativo.component';

export const routes: Routes = [
    {path:'header', component: HeaderComponent},
    {path: 'content', component: ContentComponent},
    {path: 'simpleForm', component: FormSimplesComponent},
    {path: 'reactForm', component: FormularioReativoComponent},
];
