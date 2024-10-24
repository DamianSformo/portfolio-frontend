import { Component, OnInit } from '@angular/core';
import { LanguageService } from './language.service';
import { MenuService } from './services/menu.service';
import { Menu } from './models/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menusView: Menu[] = [];
  selectedLanguage: string = 'es';
  currentLanguage: string = '';
  isMenuOpen = false;


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  constructor(
    private languageService: LanguageService,
    private menuService: MenuService,
  ) {
    this.languageService.currentLanguage$.subscribe((lang: string) => this.selectedLanguage = lang);
  }

  onLanguageChange(language: string) {
    this.languageService.setLanguage(language);
    window.location.reload();
  }

  ngOnInit(): void {
    this.currentLanguage = this.languageService.getLanguage();
    this.menuService.getView(this.currentLanguage).subscribe((data: any) => {
      this.menusView = data.response;
      
    });
  }
}
