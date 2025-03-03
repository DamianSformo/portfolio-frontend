import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Statement } from '../models/statement.model';

@Injectable({
  providedIn: 'root'
})
export class StatementService {

  constructor(private http: HttpClient) {}

  getStatementById(id: number, lang: string): Observable<Statement> {
    const url =`${environment.apiUrl}/bio/getStatementById/${id}?lang=${lang}`;
    return this.http.get<Statement>(url); 
  }
}
