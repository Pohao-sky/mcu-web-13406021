import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, HostBinding, numberAttribute, input, booleanAttribute, output } from '@angular/core';

@Component({
  selector: 'app-product-cart',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.scss',
})
export class ProductCartComponent {
  readonly id = input.required<string>();

  readonly productName = input<string>();

  readonly authors = input<string[]>();

  readonly company = input<string>();

  readonly isShow = input.required<boolean, string | boolean>({ transform: booleanAttribute });

  readonly photoUrl = input<string>();

  readonly createDate = input<Date>();

  readonly price = input<number, string | number>(0, { transform: numberAttribute });

  readonly edit = output<void>();
  readonly remove = output<void>();
  readonly view = output<void>();

  @HostBinding('class')
  class = 'app-product-cart';
}
