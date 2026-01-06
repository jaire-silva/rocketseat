import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-botao-flat',
  imports: [],
  template: `
    <button class="btn btn-flat" (click)="limpar()">Limpar filtro {{ counter }}</button>  `,
  styles: `
    .btn {
      --primary-orange: #f55a00;
      --white: #ffffff;

      font-family: Arial, sans-serif;
      padding: 12px 25px;
      font-size: 1em;
      border-radius: 8px;
      cursor: pointer;
      min-width: 150px;
      text-align: center;
      box-sizing: border-box;
    }

    .btn-flat {
      background-color: var(--white);
      border: 2px solid var(--primary-orange);
      color: var(--primary-orange);
    }
  `,
})
export class BotaoFlat implements OnInit, OnDestroy {

  counter = 0;

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  limpar() {
    this.counter += 1;
    console.log('Método de limpar');
  }
}
