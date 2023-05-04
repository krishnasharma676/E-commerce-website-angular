import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent {
productData:undefined|product;
productmessage:undefined|string;
  constructor(private route:ActivatedRoute, private product:ProductService, private router:Router){}
  ngOnInit():void{
    let productid =this.route.snapshot.paramMap.get('id')
console.log(productid)
productid && this.product.getproduct(productid).subscribe((data)=>{
this.productData=data;
console.log(this.productData)
});
  }
submit(data:any){
if(this.productData){
  data.id=this.productData.id;
}
this.product.updateproduct(data).subscribe((result)=>{
if(result){
  this.productmessage="Product Updated"
}
});
setTimeout(()=>{
  this.productmessage=undefined;
},3000);
this.router.navigate(["seller-home"])

}
}
