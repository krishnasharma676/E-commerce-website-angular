import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
productData:undefined|product;
count:number=1;
constructor(private activateroute:ActivatedRoute, private product:ProductService){}
ngOnInit(){
  let productId= this.activateroute.snapshot.paramMap.get('productId')
  console.log(productId)
productId && this.product.getproduct(productId).subscribe((result)=>{
console.log(result)
this.productData=result;
})
}

inc(){
  this.count=this.count+1;
}

dec(){
this.count=this.count-1;
}
}
