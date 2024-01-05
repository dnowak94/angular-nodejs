import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  products:Product[] = [];

  constructor(private productsService:ProductsService) {}
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts():void {
    this.productsService.getProducts()
    .subscribe(products => this.products = products);
  }

}
