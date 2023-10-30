import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeasuresListComponent } from './measures-list/measures-list.component';
import { TableModule } from 'primeng/table';
import { MeasureRegisterComponent } from './measure-register/measure-register.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
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
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    CalendarModule,
    DropdownModule,
    SharedModule
  ],
  exports:[
    MeasuresListComponent,
    MeasureRegisterComponent
  ]
})
export class MeasuresModule { }
