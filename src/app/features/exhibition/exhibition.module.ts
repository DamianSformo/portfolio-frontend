import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExhibitionComponent } from './exhibition.component';


@NgModule({
  declarations: [
    ExhibitionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ExhibitionComponent]
})
export class ExhibitionModule { }
