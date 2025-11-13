import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { cartState } from '../../../store/cart/cart.reducer';
import { selectCount, selectPrice } from '../../../store/cart/cart.selector';
import { addCartCount, totalPriceCount } from '../../../store/cart/cart.action';
import { AsyncPipe, CommonModule } from '@angular/common';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports:[AsyncPipe,CommonModule]
})
export class CartComponent {

     products = [
    {
      id: 1,
      title: "Redmi K30",
      cover:
        "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1597138340.1852584.jpg",
      price: 2199,
      currency: "CNY"
    },
    {
      id: 2,
      title: "Test",
      cover:
        "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581494045.31058391.jpg",
      price: 3799,
      currency: "CNY"
    },
    {
      id: 3,
      title: "Mix Alpha",
      cover:
        "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1569297752.58027060.jpg",
      price: 19999,
      currency: "CNY"
    },
    {
      id: 4,
      title: "samsung",
      cover:
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/597dc0f15e44d85928711966d540ed71.jpg",
      price: 49999,
      currency: "CNY"
    },
    {
      id: 5,
      title: "RedmiBook 16",
      cover:
        "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1594107583.22838030.jpg",
      price: 5699,
      currency: "CNY"
    },
    {
      id: 6,
      title: "Redmi",
      cover:
        "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1584930592.91415090.jpg",
      price: 349,
      currency: "CNY"
    }
    
  ];



  count$: Observable<number>;
  price$: Observable<number>;


  constructor(private readonly store: Store<cartState>) {
    this.count$ = this.store.select(selectCount);
    this.price$ = this.store.select(selectPrice);
  }

  addToCart(itemPrice:number) {
    console.log("sdsadad")
    this.store.dispatch(addCartCount());
    this.store.dispatch(totalPriceCount({ price: itemPrice }));
  }
}
