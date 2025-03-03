import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExhibitionComplete } from '../models/exhibitioncomplete.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExhibitionService {

  constructor(private http: HttpClient) { }

  getComplete( lang: string): Observable<ExhibitionComplete> {
    const url = `${environment.apiUrl}/exhibition/getComplete?lang=${lang}`;
    return this.http.get<ExhibitionComplete>(url); 
  }

} 
