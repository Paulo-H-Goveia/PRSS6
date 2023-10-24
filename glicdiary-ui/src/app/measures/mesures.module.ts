import { SecurityModule } from '../security/security.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';

import { MeasuresListComponent } from './measures-list/measures-list.component';
import { MeasureRegisterComponent } from './measure-register/measure-register.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MeasuresListComponent,
    MeasureRegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TableModule,
    ButtonModule,
    TooltipModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    SharedModule,
    SecurityModule
  ],
  exports: [
    MeasuresListComponent,
    MeasureRegisterComponent
  ]
})
export class measuresModule { }
