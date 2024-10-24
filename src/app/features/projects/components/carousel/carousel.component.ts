import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; 

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {

  currentIndex = 0;
  images: string [];
  fileUrl: string;

  constructor(
    public dialogRef: MatDialogRef<CarouselComponent>,
    @Inject(MAT_DIALOG_DATA) data: { images: string[], fileUrl: string }
  ) {this.images = data.images;
    this.fileUrl = data.fileUrl;}

  ngOnInit(): void {}

  previousImage(): void {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.images.length - 1;
    this.fileUrl = this.images[this.currentIndex];
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
    this.fileUrl = this.images[this.currentIndex];
  }
}
