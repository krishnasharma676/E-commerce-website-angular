import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchResult:undefined|product[];
constructor(private actiateroute:ActivatedRoute, private product:ProductService){}

ngOnInit(){
  let query= this.actiateroute.snapshot.paramMap.get('query');
  console.log(query)
  query && this.product.searchproduct(query).subscribe((result)=>{
this.searchResult=result;
  })
}
}
