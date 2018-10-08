import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { MaterialModule } from 'src/app/material.module';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { LoginPopupComponent } from 'src/app/shared/login-popup/login-popup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    LoginPopupComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  entryComponents: [HeaderComponent, LoginPopupComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
