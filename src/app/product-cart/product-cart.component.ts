import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-cart',
  imports: [],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.scss',
})
export class ProductCartComponent {
  @Input()
  productName!: string;

  @Input()
  author!: string;

  @Input()
  company!: string;

  @Input()
  isShow!: boolean;

  @Input()
  photoUrl!: string;

  onSetDisplay(isShow: boolean): void {
    this.isShow = isShow;
  }
}
