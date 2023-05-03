import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent {
  constructor(private route:ActivatedRoute, private product:ProductService){}
  ngOnInit():void{
    let productid =this.route.snapshot.paramMap.get('id')
console.log(productid)
productid && this.product.getproduct(productid).subscribe((data)=>{
console.log("id data",data)
})
  }
submit(data:any){

}
}
