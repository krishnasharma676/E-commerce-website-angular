import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menutype:string='default';
sellername:string='';
searchresult:undefined|product[];
userName:string='';

constructor( private route:Router,private product:ProductService){}
ngOnInit():void{
this.route.events.subscribe((val:any)=>{
  if(val.url){
    if(localStorage.getItem('seller') && val.url.includes('seller')){
      console.log("seller login")
      this.menutype='seller'
if(localStorage.getItem('seller')){
  let sellerstore= localStorage.getItem('seller');
  let sellerdata=sellerstore && JSON.parse(sellerstore) [0];//ye uper wala part h ligin k side m naam de=ikhane k liye
  this.sellername=sellerdata.name;
}
this.menutype='seller'
    } else if(localStorage.getItem('user')){
let userstore= localStorage.getItem('user');
let userData= userstore && JSON.parse(userstore);
this.userName=userData.name;
this.menutype='user'
    }
    else{
      this.menutype='default';
    }
  }
})
}

logout(){
  localStorage.removeItem('seller');
  this.route.navigate([''])
}

searchproducts(query:KeyboardEvent){
if(query){
  const element= query.target as HTMLInputElement;
this.product.searchproduct(element.value).subscribe((result)=>{
console.log(result)
if(result.length>5){
  result.length=6;
}

this.searchresult=result;
})
}
}
hidesearch(){
  this.searchresult=undefined
}

submitinput(val:string){
console.log(val)
this.route.navigate([`Search/${val}`])
}
redirecttodetail(id:number){
this.route.navigate(['/details/'+id])
}

userLogOut(){
  localStorage.removeItem('user');
  this.route.navigate(['/user-auth'])
}
}
