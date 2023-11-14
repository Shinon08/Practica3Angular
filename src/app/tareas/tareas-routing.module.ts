import { TareasLayoutComponent } from './layout/tareas-layout/tareas-layout.component';
import { MiListaPageComponent } from './pages/mi-lista-page/mi-lista-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioPageComponent } from './pages/formulario-page/formulario-page.component';

const routes: Routes = [
  {
    path: '',
    component: TareasLayoutComponent,
    children: [
      {
        path: 'mi-lista',
        component: MiListaPageComponent
      },
      {
        path: 'nueva-tarea',
        component: FormularioPageComponent
      },
      {
        path: '**',
        redirectTo: 'mi-lista'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareasRoutingModule { }
