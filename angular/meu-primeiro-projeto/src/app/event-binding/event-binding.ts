import {Component} from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css',
})
export class EventBinding {

  onButtonClick(event: Event) {
    console.log('onButtonClick: ', event)
  }

  onInputChange(event: Event) {
    // console.log('onInputChange: ', (event.target as HTMLInputElement).value.trim().split(''))
    console.log('onInputChange: ', event)
  }
}
