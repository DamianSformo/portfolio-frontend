import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bio } from '../models/bio.model';
import { Study } from '../models/study.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BioService { 

  constructor(private http: HttpClient) { }

  getBioById(id: number, lang: string): Observable<Bio> {
    const url = `${environment.apiUrl}/bio/getById/${id}?lang=${lang}`;
    return this.http.get<Bio>(url);
  }

  getStudies(lang: string): Observable<Study[]> {
    const url = `${environment.apiUrl}/study/getView?lang=${lang}`;
    return this.http.get<Study[]>(url);
  }
}
