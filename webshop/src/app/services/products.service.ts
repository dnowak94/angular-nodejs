import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ErrorHandling } from '../errorHandling';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private backendURL:string = `${environment.API_URL}/products`;
  constructor(private http:HttpClient, private errorHandling:ErrorHandling) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.backendURL)
    .pipe(
      tap(_ => console.log("fetched products")),
      catchError(this.errorHandling.handleError<Product[]>('ProductsService', 'getProducts'))
    );
  }
}
