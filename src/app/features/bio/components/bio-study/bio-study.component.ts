import { Component, OnInit } from '@angular/core';
import { Study } from '../../models/study.model';
import { BioService } from '../../services/bio.service';
import { TranslationService } from 'src/app/services/translation.service';
import { LanguageService } from 'src/app/menu/language.service';

@Component({
  selector: 'app-bio-study',
  templateUrl: './bio-study.component.html',
  styleUrls: ['./bio-study.component.css']
})
export class BioStudyComponent implements OnInit {

  study?: string; 
  studies: Study[] = [];
  currentLanguage: string = '';

  constructor(
    private bioService: BioService,
    private translationService: TranslationService,
    private languageService: LanguageService) { }

  ngOnInit(): void {
    this.currentLanguage = this.languageService.getLanguage();
    this.bioService.getStudies(this.currentLanguage).subscribe((data: any) => {
      this.studies = data.response;      
    });
    this.study = this.translationService.getTranslation('study');
  }
}
