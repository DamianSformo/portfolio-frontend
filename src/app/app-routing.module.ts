import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioComponent } from './features/bio/bio.component';
import { ExhibitionComponent } from './features/exhibition/exhibition.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ProcessingComponent } from './processing/processing.component';

const routes: Routes = [
  { path: '', component: ProcessingComponent },
  { path: 'bio', component: BioComponent },
  { path: 'exhibition', component: ExhibitionComponent },
  { path: 'projects', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
