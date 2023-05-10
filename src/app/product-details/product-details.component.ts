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
productquantity:number=1;
constructor(private activateroute:ActivatedRoute, private product:ProductService){}
ngOnInit(){
  let productId= this.activateroute.snapshot.paramMap.get('productId')
  console.log(productId)
productId && this.product.getproduct(productId).subscribe((result)=>{
console.log(result)
this.productData=result;
})
}

handelquantity(val:string){
if(this.productquantity<20 &&  val=='plus'){
  this.productquantity+=1
}else if(this.productquantity>1 && val=='min'){
  this.productquantity-=1;
}
}
}
