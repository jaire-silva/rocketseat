import {Component} from '@angular/core';

@Component({
  selector: 'app-dinamic-text',
  imports: [],
  templateUrl: './dinamic-text.html',
  styleUrl: './dinamic-text.css',
})
export class DinamicText {
  tamanhoTextoRem: number = 1.2;

  aumentarTexto() {
    this.tamanhoTextoRem = Math.min(this.tamanhoTextoRem + 0.2, 4.0);
  }

  diminuirTexto() {
    this.tamanhoTextoRem = Math.max(this.tamanhoTextoRem - 0.2, 0.8);
  }
}
