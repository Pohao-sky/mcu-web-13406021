import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, HostBinding, numberAttribute, input, model } from '@angular/core';

@Component({
  selector: 'app-product-cart',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.scss',
})
export class ProductCartComponent {
  readonly id = input.required<number, string | number>({ transform: numberAttribute });

  readonly productName = input<string>();

  readonly authors = input<string[]>();

  readonly company = input<string>();

  readonly isShow = model.required<boolean>();

  readonly photoUrl = input<string>();

  readonly createDate = input<Date>();

  readonly price = input<number, string | number>(0, { transform: numberAttribute });

  @HostBinding('class')
  class = 'app-product-cart';
  $last: any;

  onSetDisplay(isShow: boolean): void {
    this.isShow.set(isShow);
  }
}
