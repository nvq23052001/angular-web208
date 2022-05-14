import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  @Output() onSubmit = new EventEmitter();
  productItem: { name: string; price: number } = {
    name: '',
    price: 0,
  };

  handleSubmit() {
    this.onSubmit.emit(this.productItem);
  }

  ngOnInit(): void {}
}
