import { Component } from '@angular/core';

@Component({
  selector: 'app-product-cart',
  imports: [],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.scss',
})
export class ProductCartComponent {
  productName = '書籍A';
  author = '作者甲、作者乙、作者丙';
  company = '博碩文化';

  isShow = true;

  photoUrl = 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img';

  onSetDisplay(isShow: boolean): void {
    this.isShow = isShow;
  }
}
