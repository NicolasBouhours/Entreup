import { routing } from './../app.routing';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    exports: [CommonModule, ReactiveFormsModule]
})
export class SharedModule { }