import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatementComponent } from './statement.component';



@NgModule({
  declarations: [
    StatementComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [StatementComponent]
})
export class StatementModule { }
