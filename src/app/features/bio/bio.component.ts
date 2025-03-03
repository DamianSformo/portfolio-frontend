import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  isLoading = true;
  private bioLoaded = false;
  private studyLoaded = false;

  constructor() { }

  ngOnInit(): void {
    // Inicializamos el estado, no es necesario hacer nada aquí por ahora
  }

  // Método que se llama cuando bio-bio ha terminado de cargar
  onBioLoaded() {
    this.bioLoaded = true;
    this.checkLoadingStatus();
  }

  // Método que se llama cuando bio-study ha terminado de cargar
  onStudyLoaded() {
    this.studyLoaded = true;
    this.checkLoadingStatus();
  }

  private checkLoadingStatus() {
    if (this.bioLoaded && this.studyLoaded) {
      this.isLoading = false;
    }
  }
}