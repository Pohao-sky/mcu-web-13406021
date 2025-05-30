import { Component, input, output } from '@angular/core';
import { ProductCartComponent } from '../product-cart/product-cart.component';
import { Product } from '../models/product';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-product-card-list',
  imports: [PaginationComponent, ProductCartComponent],
  templateUrl: './product-card-list.component.html',
  styleUrl: './product-card-list.component.scss',
})
export class ProductCardListComponent {
  readonly products = input<Product[]>([]);

  readonly edit = output<Product>();

  readonly remove = output<Product>();

  readonly view = output<Product>();

  pageIndex = 1;
}
