import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  imports: [SearchComponent, ProductListComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  //properties
  // name:string='iPhone 13';
  // price:number=999;
  // color:string='Matte black'

  //object
  // addToCart: number = 0;
  // product = {
  //   name: 'iPhone',
  //   price: 999,
  //   color: 'Matte black',
  //   discount: 8.5,
  //   inStock: 5,
  //   pImage: '/images/iphonepic.png',
  // };

  // //method to calculate discounted price
  // getDiscountedPrice() {
  //   return (
  //     this.product.price - (this.product.price * this.product.discount) / 100
  //   );
  // }

  // decrementCartValue(){
  //   this.addToCart--;
  // }
  // incrementCartValue(){
  //   this.addToCart++;
  // }
}
