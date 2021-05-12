import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonasComponent } from './formas/personas/personas.component';
import { HomeComponent } from './formas/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {PersonasService} from './services/personas.service';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
