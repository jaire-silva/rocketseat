import {Component} from '@angular/core';
import {DinamicText} from './components/style-binding/dinamic-text/dinamic-text';

@Component({
  selector: 'app-root',
  imports: [
    DinamicText
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
