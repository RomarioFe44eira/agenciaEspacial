import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './content/content.component';
import { AstronautasComponent } from './content/astronautas/astronautas.component';
import { MissoesComponent } from './content/missoes/missoes.component';
import { NavesComponent } from './content/naves/naves.component';

import { EditComponent } from './content/astronautas/edit/edit.component';
import { NovoComponent } from './content/astronautas/novo/novo.component';
import { ExcluirComponent } from './content/astronautas/excluir/excluir.component';

const routes: Routes = [
 {
    path: '',
    component: ContentComponent
  },
  {
    path: 'astronautas',
    component: AstronautasComponent
  },
  {
    path: 'missoes',
    component: MissoesComponent
  },
  {
    path: 'naves',
    component: NavesComponent
  },
  {
    path: 'astronautas/editar/:id',
    component: EditComponent
  },
   {
    path: 'astronautas/excluir/:id',
    component: ExcluirComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
