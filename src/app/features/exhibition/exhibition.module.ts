import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExhibitionComponent } from './exhibition.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';   

@NgModule({
  declarations: [
    ExhibitionComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [ExhibitionComponent]
})
export class ExhibitionModule { }
