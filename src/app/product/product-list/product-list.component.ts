import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = null;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.products = [
        new Product(1, 'テストテキスト1', 1000, 'これはテストテキスト１です。'),
        new Product(2, 'サプライズ　サプライズ', 1400, 'なんとサプライズ'),
        new Product(3, '真夏のテディベア', 3000, 'なんというテディベア...'),
      ];
    }, 3000);
  }

}
