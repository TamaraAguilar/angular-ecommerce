import { Component, inject } from '@angular/core';
import { Products as ProductsService } from '../services/products';
import { Products } from './../../types';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private productsService = inject(ProductsService);
  private readonly baseUrl = 'http://localhost:3000/';

  ngOnInit() {
    this.productsService
      .getProducts(`${this.baseUrl}clothes`, { page: 0, perPage: 5 })
      .subscribe((products: Products) => {
        console.log(products.items);
      });
  }
}
