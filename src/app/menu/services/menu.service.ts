import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Menu} from '../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private apiUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

    getView(lang: string): Observable<Menu> {
      const url = `${this.apiUrl}/menu/getView/?lang=${lang}`;
      return this.http.get<Menu>(url);
    }

}
