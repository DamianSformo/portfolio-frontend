import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  currentIndex = 0;
  isOpen = false; // Inicialmente no está abierto

  constructor(
    public dialogRef: MatDialogRef<CarouselComponent>,
    @Inject(MAT_DIALOG_DATA) public images: string[]
  ) {}



  ngOnInit(): void {
    // Usa un retraso para permitir que el carrusel se renderice antes de aplicar la clase open
    setTimeout(() => {
      this.isOpen = true;
    }, 0); // Cambia esto si es necesario para asegurar el tiempo de renderizado
  }

  previousImage(): void {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.images.length - 1;
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
  }
}
