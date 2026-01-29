import {Component} from '@angular/core';
import {DinamicText} from './components/style-binding/dinamic-text/dinamic-text';
import {ProgressBar} from './components/style-binding/progress-bar/progress-bar';
import {SquarePopup} from './components/style-binding/square-popup/square-popup';

@Component({
  selector: 'app-root',
  imports: [
    DinamicText,
    ProgressBar,
    SquarePopup
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
