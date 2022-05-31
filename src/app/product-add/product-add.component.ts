import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../../models';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  @Output() onSubmit = new EventEmitter();

  productItem: {
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  } = {
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
  };

  id: any;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    if (this.id) {
      this.productService.getProduct(this.id).subscribe((data: any) => {
        this.productItem = data;
      });
    }
  }

  handleSubmit() {
    this.onSubmit.emit(this.productItem);

    this.handleAddProduct();
  }
  handleAddProduct() {
    if (this.id) {
      this.productService
        .editProduct(this.productItem)
        .subscribe((product: any) => {
          setTimeout(() => {
            // redirect về product list
            this.router.navigateByUrl('/products');
          }, 2000);
        });
    } else {
      this.productService
        .addProduct(this.productItem)
        .subscribe((product: any) => {
          console.log(product);
        });
    }
  }
}
