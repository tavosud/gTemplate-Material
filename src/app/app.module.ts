import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './admtemplate/container/container.component';
import { HeadLayoutComponent } from './admtemplate/container/head-layout/head-layout.component';
import { LeftLayoutComponent } from './admtemplate/container/left-layout/left-layout.component';
import { DashboardComponent } from './admtemplate/dashboard/dashboard.component';
import { FormsComponent } from './admtemplate/forms/forms.component';
import { LoginComponent } from './admtemplate/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeadLayoutComponent,
    LeftLayoutComponent,
    DashboardComponent,
    FormsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
