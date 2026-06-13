import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';

@Service()
export class Api {
  private httpClient = inject(HttpClient);

  get<T>(url: string, options?: any): Observable<T> {
    return this.httpClient.get<T>(url, options) as Observable<T>;
  }
}
