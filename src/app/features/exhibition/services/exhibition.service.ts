import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExhibitionComplete } from '../models/exhibitioncomplete.model';

@Injectable({
  providedIn: 'root'
})
export class ExhibitionService {

  private apiUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  getComplete( lang: string): Observable<ExhibitionComplete> {
    const url = `${this.apiUrl}/exhibition/getComplete?lang=${lang}`;
    return this.http.get<ExhibitionComplete>(url);
  }

} 
