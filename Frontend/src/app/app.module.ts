import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { MaterialModule } from 'src/app/material.module';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
