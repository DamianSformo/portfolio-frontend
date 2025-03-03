import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectComponent } from './components/project/project.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'projects/:id', component: ProjectComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
