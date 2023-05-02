import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  addProduct(data:product){
    console.log("service product")
    return this.http.post('http://localhost:3000/products',{data});
  }
  productlist(){
    return this.http.get<product[]>('http://localhost:3000/products')
  }
}
