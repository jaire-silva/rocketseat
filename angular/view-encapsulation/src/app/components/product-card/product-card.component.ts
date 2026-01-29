import {Component, ViewEncapsulation} from '@angular/core';
import {CustomButtonComponent} from '../custom-button/custom-button.component';

@Component({
  selector: 'app-product-card',
  imports: [
    CustomButtonComponent
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductCardComponent {

}
