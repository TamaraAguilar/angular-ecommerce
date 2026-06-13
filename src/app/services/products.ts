import { inject, Service } from '@angular/core';
import { Api } from './api';
import { Observable } from 'rxjs';
import { PaginationParams, Products as ProductsResponse } from '../../types';

@Service()
export class Products {
  private apiService = inject(Api);

  getProducts = (url: string, params: PaginationParams): Observable<ProductsResponse> => {
    return this.apiService.get(url, {
      params,
      responseType: 'json',
    });
  };
}
