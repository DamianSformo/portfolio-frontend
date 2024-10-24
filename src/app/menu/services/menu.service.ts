import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Menu} from '../models/menu.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

    getView(lang: string): Observable<Menu> {
      const url = `${environment.apiUrl}/menu/getView/?lang=${lang}`;
      return this.http.get<Menu>(url);
    }

}
