import { Injectable } from '@angular/core';
import { ProjectPreview } from '../models/project-preview.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

    getPreview(lang: string): Observable<ProjectPreview> {
      const url = `${this.apiUrl}/project/getPreview/?lang=${lang}`;
      return this.http.get<ProjectPreview>(url);
    }

    getById(id: number, lang: string): Observable<Project> {
      const url = `${this.apiUrl}/project/getById/${id}?lang=${lang}`;
      return this.http.get<Project>(url);
    }
  
}
