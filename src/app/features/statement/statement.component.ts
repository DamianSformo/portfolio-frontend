import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {

  isPanelOpen: boolean = false;
  isClosing: boolean = false;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
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