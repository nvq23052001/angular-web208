import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @Input('product') productList!: Product[];
  productDetail!: Product;

  handleInfo(id: number) {
    console.log(id);
    this.productDetail = this.productList.find((product) => product.id === id)!;
  }

  ngOnInit(): void {}
}
