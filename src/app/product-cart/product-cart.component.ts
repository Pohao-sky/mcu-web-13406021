import { CurrencyPipe, DatePipe } from '@angular/common';
import { booleanAttribute, Component, EventEmitter, HostBinding, Input, numberAttribute, Output } from '@angular/core';

@Component({
  selector: 'app-product-cart',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.scss',
})
export class ProductCartComponent {
  @Input({ required: true, transform: numberAttribute })
  id!: number;

  @Input()
  productName!: string;

  @Input()
  author!: string;

  @Input()
  company!: string;

  @Input({ transform: booleanAttribute })
  isShow!: boolean;

  @Output()
  isShowChange = new EventEmitter<boolean>();

  @Input()
  photoUrl!: string;

  @Input()
  createDate!: Date;

  @Input({ transform: numberAttribute })
  price!: number;

  @HostBinding('class')
  class = 'app-product-cart';

  onSetDisplay(isShow: boolean): void {
    this.isShowChange.emit(isShow);
  }
}
