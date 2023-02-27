import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from 'src/app/shared/guards/can-deactivate.guard';
import { MedicoFormComponent } from './medico-form/medico-form.component';
import { MedicoListComponent } from './medico-list/medico-list.component';

const routes: Routes = [
  {
    path: '',
    component: MedicoListComponent
  },
  {
    path: 'novo',
    component: MedicoFormComponent,
    canDeactivate: [CanDeactivateGuard],
  },
  {
    path: 'editar/:id',
    component: MedicoFormComponent,
    canDeactivate: [CanDeactivateGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // providers: [CanDeactivateGuard]
})
export class CadastroRoutingModule { }
