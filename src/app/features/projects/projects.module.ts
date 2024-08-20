import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectComponent } from './components/project/project.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MatIconModule
  ]
})
export class ProjectsModule { }
