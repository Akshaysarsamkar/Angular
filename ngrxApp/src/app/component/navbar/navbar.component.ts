import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { cartState } from '../../../store/cart/cart.reducer';
import { selectCount, selectPrice } from '../../../store/cart/cart.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

    count$: Observable<number>;
    price$: Observable<number>;
  
    constructor(private store: Store<cartState>) {
      this.count$ = this.store.select(selectCount);
      this.price$ = this.store.select(selectPrice);
    }

}
