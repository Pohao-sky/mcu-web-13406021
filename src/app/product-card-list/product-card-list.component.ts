import { Component, Input } from '@angular/core';
import { ProductCartComponent } from '../product-cart/product-cart.component';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-card-list',
  imports: [ProductCartComponent],
  templateUrl: './product-card-list.component.html',
  styleUrl: './product-card-list.component.scss',
})
export class ProductCardListComponent {
  @Input()
  products!: Product[];
}
