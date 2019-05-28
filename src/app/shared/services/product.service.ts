import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, of } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    new Product(1, 'テストテキスト1', 1200, 'これはテストテキスト1です'),
    new Product(2, 'テストテキスト2', 500, 'テストテキスト1の続きです'),
    new Product(3, 'アンビリーバブル', 2000, '薄い内容なのにこのお値段'),
  ]
  constructor() { }

  list(): Observable<Product[]> {
    return of(this.products);
  }

  get(id: number): Observable<Product> {
    return of(this.products[id - 1]);
  }
}
