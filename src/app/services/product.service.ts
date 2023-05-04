import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../data-type';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  addProduct(data:product){
    console.log("service product")
    return this.http.post('http://localhost:3000/products',data);
  }
  productList(){
    return this.http.get<product[]>('http://localhost:3000/products');
  }

  deleteproduct(id:number){
 return this.http.delete(`http://localhost:3000/products/${id}`)
  }

  getproduct(id:string){
    return this.http.get<product>(`http://localhost:3000/products/${id}`)
  }


  updateproduct(product:product){
    return this.http.put<product[]>(`http://localhost:3000/products/${product.id}`,product);
    
    
  }


  popularproducts(){
    return this.http.get<product[]>('http://localhost:3000/products?_limit=3');
  }

  trendyproducts(){
    return this.http.get<product[]>('http://localhost:3000/products?_limit=10')
  }
}
