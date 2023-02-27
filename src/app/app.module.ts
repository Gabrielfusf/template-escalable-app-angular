import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { HttpClientModule } from '@angular/common/http';
import { Interceptor } from './shared/interceptor/auth.interceptor.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { RouterModule } from '@angular/router';
import { OverlayModule } from 'primeng/overlay';
import { CommonModule } from '@angular/common';
import {ToastModule} from 'primeng/toast';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    ButtonModule,
    PanelModule,
    HttpClientModule,
    Interceptor,
    ConfirmDialogModule,
    DialogModule,
    RouterModule,
    OverlayModule,
    CommonModule,
    ToastModule,
    
    
    
  ],
  providers: [
    MessageService, 
    ConfirmationService,  
    { provide: LOCALE_ID, useValue: "pt-BR" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
