import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { StatementService } from './services/statement.service';
import { Statement } from './models/statement.model';
import { LanguageService } from 'src/app/menu/language.service';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {

  statement?: Statement;
  currentLanguage: string = '';

  isPanelOpen: boolean = false;
  isClosing: boolean = false;

  constructor(
    private elementRef: ElementRef,
    private statementService: StatementService,
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.currentLanguage = this.languageService.getLanguage();
    this.statementService.getStatementById(1, this.currentLanguage).subscribe((data: any) => {
      this.statement = data.response;
      
    });
  }

  togglePanel(): void {
    if (this.isPanelOpen) {
      this.isClosing = true;
      setTimeout(() => {
        this.isPanelOpen = false;
        this.isClosing = false;
      }, 300); // Tiempo de la animación en ms
    } else {
      this.isPanelOpen = true;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside && this.isPanelOpen) {
      this.togglePanel();
    }
  }
}