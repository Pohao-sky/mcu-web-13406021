import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCartComponent } from './product-cart/product-cart.component';

@Component({
  selector: 'app-root',
  imports: [ProductCartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'shopping-cart';
}
