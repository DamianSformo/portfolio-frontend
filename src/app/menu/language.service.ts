import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languageSubject = new BehaviorSubject<string>(this.getStoredLanguage());

  currentLanguage$ = this.languageSubject.asObservable();

  setLanguage(language: string) {
    localStorage.setItem('selectedLanguage', language);
    this.languageSubject.next(language);
  }

  getLanguage() {
    return this.languageSubject.value;
  }

  private getStoredLanguage(): string {
    return localStorage.getItem('selectedLanguage') || 'es';
  }
}
