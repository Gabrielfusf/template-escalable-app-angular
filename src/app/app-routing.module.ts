import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CanDeactivateGuard } from './shared/guards/can-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'medico',
    loadChildren: () => import('./modules/cadastro/cadastro.module').then((m) => m.CadastroModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 
})
export class AppRoutingModule { }
