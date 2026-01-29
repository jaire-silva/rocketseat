import {Component} from '@angular/core';

@Component({
  selector: 'app-square-popup',
  imports: [],
  templateUrl: './square-popup.html',
  styleUrl: './square-popup.css',
})
export class SquarePopup {
  posicaoHorizontal: number = 0;
  alturaPopup: number = -10;

  moverQuadrado() {
    this.posicaoHorizontal = (this.posicaoHorizontal + 10) % 100;
  }

  togglePopup() {
    this.alturaPopup = this.alturaPopup === -10 ? 0 : -10;
  }
}
