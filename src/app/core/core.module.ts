import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import { NavbarComponent } from './navbar/navbar.component';

import {MenubarModule} from 'primeng/menubar';
import {SidebarModule} from 'primeng/sidebar';
import {PanelMenuModule} from 'primeng/panelmenu';
import {AccordionModule} from 'primeng/accordion';
import { DatePipe } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelModule } from 'primeng/panel';
import { LoginComponent } from './login/login/login.component';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [
    CommonModule, 
    MenubarModule, 
    SidebarModule, 
    PanelMenuModule, 
    AccordionModule, 
    ButtonModule, 
    RippleModule, 
    DatePipe, 
    ButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    PanelModule,
    DialogModule,
    ReactiveFormsModule,
    InputTextModule
  ],
  exports: [NavbarComponent, SidebarComponent, LoginComponent],
  declarations: [NavbarComponent, SidebarComponent, LoginComponent],
  providers: []
})
export class CoreModule { }
