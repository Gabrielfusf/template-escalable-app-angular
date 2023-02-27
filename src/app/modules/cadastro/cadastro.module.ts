import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { MedicoListComponent } from './medico-list/medico-list.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";
import { DialogModule } from "primeng/dialog";
import { DropdownModule } from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import { InputTextModule } from "primeng/inputtext";
import { PanelModule } from "primeng/panel";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import { RadioButtonModule } from "primeng/radiobutton";
import { RippleModule } from "primeng/ripple";
import { TableModule } from "primeng/table";
import { TooltipModule } from "primeng/tooltip";
import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { HttpClientModule } from '@angular/common/http';
import { Interceptor } from 'src/app/shared/interceptor/auth.interceptor.module';
import { MedicoFormComponent } from './medico-form/medico-form.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MedicoListComponent,
    MedicoFormComponent
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    PanelModule,
    DropdownModule,
    ButtonModule,
    ReactiveFormsModule,
    TableModule,
    RippleModule,
    TooltipModule,
    CheckboxModule,
    InputTextModule,
    RadioButtonModule,
    FormsModule,
    DialogModule,
    ProgressSpinnerModule,
    InputNumberModule,
    AutoCompleteModule,
    CalendarModule,
    HttpClientModule,
    Interceptor,
    ConfirmDialogModule,
    RouterModule

  ]
})
export class CadastroModule { }
