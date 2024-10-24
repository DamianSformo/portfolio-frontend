import { Component, OnInit } from '@angular/core';
import { ProjectPreview } from './models/project-preview.model';
import { ProjectService } from './services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectsPreview: ProjectPreview[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getPreview('es').subscribe((data: any) => {
      this.projectsPreview = data.response;
      console.log(this.projectsPreview);
    });
  }
}
