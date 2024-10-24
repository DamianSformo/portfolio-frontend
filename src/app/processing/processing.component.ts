import { Component, ElementRef, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-processing',
  standalone: true,
  imports: [],
  templateUrl: './processing.component.html',
  styleUrl: './processing.component.css'
})
export class ProcessingComponent implements OnInit {

  constructor(private el: ElementRef) {}

  private sketch = (p: any) => {
    let coreaDelNorte: any;
    let pg: any;
    let indice = 0;

    p.preload = () => {
      coreaDelNorte = p.loadImage('assets/corea del norte.png')
    };


    //arma el lienzo
    p.setup = () => {
      const containerElement = document.getElementById('canvas-container');
    
      if (containerElement) {
        let canvasWidth = containerElement.offsetWidth;
        let canvasHeight = containerElement.offsetHeight;
    
        p.createCanvas(canvasWidth, canvasHeight).parent('canvas-container');
        pg = p.createGraphics(canvasWidth, canvasHeight);
        pg.background(255);
        }
    };

    p.draw = () => {
      p.clear();  // Limpiar el lienzo antes de dibujar

      // Calcula el tamaño y posición de la imagen
      let imgWidth = p.width * 0.75;  // 75% del ancho del lienzo
      let imgHeight = coreaDelNorte.height * (imgWidth / coreaDelNorte.width);  // Mantener la proporción original
      
      let imgX = (p.width - imgWidth) / 2;  // Posición horizontal centrada
      let imgY = (p.height - imgHeight) / 2;  // Posición vertical centrada

      p.image(pg, 0, 0);  // Dibujar la capa gráfica
      p.image(coreaDelNorte, imgX, imgY, imgWidth, imgHeight);  // Dibujar la imagen escalada y centrada
    };

    p.mousePressed = () => {
      // Calcula el tamaño y posición de la imagen
      let imgWidth = p.width * 0.75;  // 75% del ancho del lienzo
      let imgHeight = coreaDelNorte.height * (imgWidth / coreaDelNorte.width);  // Mantener la proporción original
  
      let imgX = (p.width - imgWidth) / 2;  // Posición horizontal centrada
      let imgY = (p.height - imgHeight) / 2;  // Posición vertical centrada
  
      // Verifica si el clic está dentro de la imagen escalada
      if (p.mouseX >= imgX && p.mouseX <= imgX + imgWidth &&
          p.mouseY >= imgY && p.mouseY <= imgY + imgHeight) {
  
          // **Ajuste aquí**: recalculamos las coordenadas del clic dentro de la imagen escalada
          let xInImage = (p.mouseX - imgX) * (coreaDelNorte.width / imgWidth);
          let yInImage = (p.mouseY - imgY) * (coreaDelNorte.height / imgHeight);
  
          // Obtener el color de la imagen en la posición donde se hizo clic
          let c = coreaDelNorte.get(xInImage, yInImage);
  
          if (c && indice == 0) {
              pg.stroke(c);
              pg.strokeWeight(38);
              pg.line(indice, 0, indice, p.height);
              indice += 10;
          } else {
            pg.stroke(c);
            pg.strokeWeight(20);
            pg.line(indice, 0, indice, p.height);
          }
  
          indice += 19;
          if (indice >= p.width) {
              indice = 0;
          }
      } else {
          console.log('Clic fuera de la imagen');
      }
  };

    p.keyPressed = () => {
      if (p.keyCode === p.LEFT_ARROW) {
        pg.background(0);
        indice = 0;
      } else if (p.keyCode === p.UP_ARROW) {
        p.saveCanvas('coreacolor', 'png');
      }
    };
  };

  ngOnInit(): void {
    new p5(this.sketch, this.el.nativeElement);
  }
}