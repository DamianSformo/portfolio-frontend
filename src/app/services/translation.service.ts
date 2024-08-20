import { Injectable } from '@angular/core';
import { LanguageService } from '../menu/language.service';

type Language = 'es' | 'en';
type TranslationKeys = 'aboutMe' | 'study' | 'individualExhibitions' | 'groupExhibitions'; 

interface Translations {
  es: Record<TranslationKeys, string>;
  en: Record<TranslationKeys, string>;
}

@Injectable({
  providedIn: 'root'
})

export class TranslationService {
  private translations: Translations = {
    es: {
      aboutMe: 'Sobre mí',
      study: 'Estudios',
      individualExhibitions: 'Exhibiciones Individuales',
      groupExhibitions: 'Exhibiciones Individuales'
      
      // Agrega más traducciones aquí
    },
    en: {
      aboutMe: 'About Me',
      study: 'Studies',
      individualExhibitions: 'Individual Exhibitions',
      groupExhibitions: 'Group Exhibitions'
    }
  };

  constructor(private languageService: LanguageService) {}

  getTranslation(key: TranslationKeys): string {
    const lang = this.languageService.getLanguage() as Language; // Asegura que lang es de tipo Language
    return this.translations[lang][key] || key;
  }
}