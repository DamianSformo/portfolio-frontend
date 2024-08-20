import { Component, OnInit } from '@angular/core';
import { BioService } from '../../services/bio.service';
import { Bio } from '../../models/bio.model';
import { TranslationService } from 'src/app/services/translation.service';
import { LanguageService } from 'src/app/menu/language.service';

@Component({
  selector: 'app-bio-bio',
  templateUrl: './bio-bio.component.html',
  styleUrls: ['./bio-bio.component.css']
})
export class BioBioComponent implements OnInit {

  aboutMe?: string; 
  bio: Bio | undefined;
  currentLanguage: string = '';

  constructor(
    private bioService: BioService,
    private translationService: TranslationService,
    private languageService: LanguageService) { }

  ngOnInit(): void {
    this.currentLanguage = this.languageService.getLanguage();
    this.bioService.getBioById(1, this.currentLanguage).subscribe((data: any) => {
      this.bio = data.response;
    });
    this.aboutMe = this.translationService.getTranslation('aboutMe');
  }
} 
