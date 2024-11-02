import { Component, OnInit } from '@angular/core';
import { ExhibitionComplete } from './models/exhibitioncomplete.model';
import { ExhibitionService } from './services/exhibition.service';
import { Exhibition } from './models/exhibition.model';
import { LanguageService } from 'src/app/menu/language.service';
import { TranslationService } from 'src/app/services/translation.service';
import { Prize } from './models/prize.model';

@Component({
  selector: 'app-exhibition',
  templateUrl: './exhibition.component.html',
  styleUrls: ['./exhibition.component.css']
})
export class ExhibitionComponent implements OnInit  {
  isLoading = false;

  exhibitionComplete: ExhibitionComplete | undefined;
  exhibitionsIndividual: Exhibition[] = [];
  exhibitionsGroup: Exhibition[] = [];
  prizes: Prize[] = [];

  currentLanguage: string = '';
  individualExhibitions?: string; 
  groupExhibitions?: string; 
  scholarshipsPrizesAndResidencies?: string;

  constructor(private exhibitionService: ExhibitionService,
    private translationService: TranslationService,
    private languageService: LanguageService
  ) { }

  ngOnInit(): void { 
    this.isLoading = true;
    this.currentLanguage = this.languageService.getLanguage();
    this.exhibitionService.getComplete(this.currentLanguage).subscribe((data: any) => {
      this.exhibitionsIndividual = data.response.exhibitionIndividual;
      this.exhibitionsGroup = data.response.exhibitionGroup;
      this.prizes = data.response.prizes;

      this.individualExhibitions = this.translationService.getTranslation('individualExhibitions');
      this.groupExhibitions = this.translationService.getTranslation('groupExhibitions');
      this.scholarshipsPrizesAndResidencies = this.translationService.getTranslation('scholarshipsPrizesAndResidencies');
    
      this.isLoading = false;
    });

    
  }

}
