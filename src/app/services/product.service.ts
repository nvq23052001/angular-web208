import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../../models';

const apiUrl = `http://localhost:3001`;

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(`${apiUrl}/products`);
  }
  getProduct(id: undefined | number) {
    return this.http.get(`${apiUrl}/products/${id}`);
  }

  addProduct(product: any) {
    return this.http.post(`${apiUrl}/products`, product);
  }
  editProduct(product: any) {
    return this.http.put(`${apiUrl}/products/${product.id}`, product);
  }

  deleteProduct(id: undefined | number) {
    return this.http.delete(`${apiUrl}/products/${id}`);
  }
}
