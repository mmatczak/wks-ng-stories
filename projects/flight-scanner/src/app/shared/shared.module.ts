import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './header/app-header/app-header.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppHeaderComponent],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    AppHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
