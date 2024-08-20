import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from 'src/app/menu/language.service';
import {
  MatLegacyDialog as MatDialog,
  MatLegacyDialogActions as MatDialogActions,
  MatLegacyDialogClose as MatDialogClose,
  MatLegacyDialogContent as MatDialogContent,
  MatLegacyDialogRef as MatDialogRef,
  MatLegacyDialogTitle as MatDialogTitle,
} from '@angular/material/legacy-dialog';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {



  images: string[] = [];

  project: Project | undefined;
  currentLanguage: string = '';

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private languageService: LanguageService
  ) { }

  openCarousel(selectedIndex: number): void {
    
    const dialogRef = this.dialog.open(CarouselComponent, {
      data: this.images,
      width: '100%',
      height: '100%',
      panelClass: 'full-screen-dialog',
      
    });
  
    dialogRef.afterOpened().subscribe(() => {
      if (dialogRef.componentInstance) {
        dialogRef.componentInstance.currentIndex = selectedIndex;
      }
    });
  }

  ngOnInit(): void {
    this.currentLanguage = this.languageService.getLanguage();
    this.route.params.subscribe(params => {
      const id = +params['id'];  // Asegúrate de convertir a número
      this.getProjectById(id, this.currentLanguage);
    });
  }

  getProjectById(id: number, lang: string): void {
    this.projectService.getById(id, lang).subscribe((data: any) => {
      this.project = data.response;
      
      // Verifica si 'projectFiles' está presente y actualiza 'images'
      if (this.project && this.project.projectFiles) {
        this.images = this.project.projectFiles.map(file => file.url);
      }
      console.log(this.images);
      
    });
  }
}