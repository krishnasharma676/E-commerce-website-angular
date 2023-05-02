import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menutype:string='default';
sellername:string='';

constructor( private route:Router){}
ngOnInit():void{
this.route.events.subscribe((val:any)=>{
  if(val.url){
    if(localStorage.getItem('seller') && val.url.includes('seller')){
      console.log("seller login")
      this.menutype='seller'
if(localStorage.getItem('seller')){
  let sellerstore= localStorage.getItem('seller');
  let sellerdata=sellerstore && JSON.parse(sellerstore)
  // [0];//ye uper wala part h ligin k side m naam de=ikhane k liye
  this.sellername=sellerdata.name;
}
this.menutype='seller'
    }else{
      this.menutype='default';
    }
  }
})
}

logout(){
  localStorage.removeItem('seller');
  this.route.navigate([''])
}
}
