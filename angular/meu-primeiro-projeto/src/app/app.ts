import {Component} from '@angular/core';
import {DinamicText} from './components/style-binding/dinamic-text/dinamic-text';
import {ProgressBar} from './components/style-binding/progress-bar/progress-bar';
import {SquarePopup} from './components/style-binding/square-popup/square-popup';
import {ConsumidorCard} from './components/exemplo-card/consumidor-card/consumidor-card';

@Component({
  selector: 'app-root',
  imports: [
    DinamicText,
    ProgressBar,
    SquarePopup,
    ConsumidorCard
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
