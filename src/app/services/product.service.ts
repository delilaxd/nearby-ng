import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

const baseUrl = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${baseUrl}/products`);
  }

  get(id: any): Observable<Product> {
    return this.http.get<Product>(`${baseUrl}/product/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/products`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/products/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/products/${id}`);
  }

}