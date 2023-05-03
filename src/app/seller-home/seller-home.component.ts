import { Component , OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import { faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  productmessage: string | undefined;
 productList:undefined |product[];

 deleteicon=faTrash;
 editicon=faEdit;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.list();
    
  }

  deleteproduct(id: number) {
    console.log(id)
    this.productService.deleteproduct(id).subscribe((result) => {
      if(result){
      this.productmessage = 'Product is deleted';
this.list()
      
      }
    })
    setTimeout(()=>{
      this.productmessage=undefined;
          },3000);
  }
  list(){
    this.productService.productList().subscribe((result) => {
    
      if(result){
        this.productList = result;
      console.log('json data =', this.productList);
      }
    })
  }
}

