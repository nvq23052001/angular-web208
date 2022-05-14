import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  productStatus: boolean = true;
  title: string = 'Product';
  productList: { id: number; name: string; price: number; status: boolean }[] =
    [
      { id: 1, name: 'Product A', price: 200, status: false },
      { id: 2, name: 'Product B', price: 300, status: true },
      { id: 3, name: 'Product C', price: 400, status: false },
    ];

  name: string = '';
  price: number = 0;
  status: boolean = true;

  handleClick(id: any) {
    this.productList = this.productList.filter((product) => product.id !== id);
  }
  handleToggle() {
    this.productStatus = !this.productStatus;
  }
  handleAddProduct(product: any) {
    this.productList.push(product);
  }
}
