import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showNavigationArrows = false;
	showNavigationIndicators = false;
	images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
  popularproducts:undefined|product[];

  trendyproduct:undefined|product[];
constructor(private product:ProductService){}

ngOnInit(){
  this.product.popularproducts().subscribe((data)=>{
    console.log(data)
    this.popularproducts=data;
  })
  this.product.trendyproducts().subscribe((result)=>{
this.trendyproduct =result;
  })
}

}
