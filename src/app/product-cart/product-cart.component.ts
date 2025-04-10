import { booleanAttribute, Component, EventEmitter, Input, numberAttribute, Output } from '@angular/core';

@Component({
  selector: 'app-product-cart',
  imports: [],
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

  onSetDisplay(isShow: boolean): void {
    this.isShowChange.emit(isShow);
  }
}
