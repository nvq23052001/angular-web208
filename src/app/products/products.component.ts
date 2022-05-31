import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @Input('product') productList!: Product[];
  data!: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.onGetList();
  }

  onGetList() {
    this.productService.getProducts().subscribe((product: any) => {
      console.log(product);
      this.data = product;
    });
  }

  handleDeleteProduct(id: any) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.data = this.data.filter((item: any) => item.id !== id);
    });
  }
}
