import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './header/app-header/app-header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProgressIndicatorModule } from 'flight-lib';


@NgModule({
  declarations: [AppHeaderComponent],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    AppHeaderComponent
  ],
  imports: [
    CommonModule, ProgressIndicatorModule
  ]
})
export class SharedModule { }
