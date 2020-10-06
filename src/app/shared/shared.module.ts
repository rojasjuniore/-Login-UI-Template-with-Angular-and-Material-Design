import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from "../angular-material.module";

@NgModule({
  declarations: [],
  exports: [
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  imports: [
    AngularMaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
