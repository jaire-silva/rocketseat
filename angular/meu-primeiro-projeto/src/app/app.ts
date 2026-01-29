import {Component} from '@angular/core';
import {DinamicText} from './components/style-binding/dinamic-text/dinamic-text';
import {ProgressBar} from './components/style-binding/progress-bar/progress-bar';

@Component({
  selector: 'app-root',
  imports: [
    DinamicText,
    ProgressBar
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
