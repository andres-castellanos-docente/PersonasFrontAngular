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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableExporterModule} from 'mat-table-exporter';
import {MatDialogModule} from '@angular/material/dialog';
import { DiagpersonasComponent } from './formas/personas/diagpersonas/diagpersonas.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    HomeComponent,
    DiagpersonasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableExporterModule,
    MatDialogModule
  ],
  providers: [PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
