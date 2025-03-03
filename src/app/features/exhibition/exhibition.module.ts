import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExhibitionComponent } from './exhibition.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ExhibitionComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    SharedModule
  ],
  exports: [ExhibitionComponent]
})
export class ExhibitionModule { }
