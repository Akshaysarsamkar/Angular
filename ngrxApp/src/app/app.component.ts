import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/app.state';
import { selectCount, selectCounterState } from '../store/counter.selector';
import { AsyncPipe } from '@angular/common';
import { decrementCounter, incrementCounter } from '../store/counter.action';
import { CartComponent } from "./component/cart/cart.component";
import { NavbarComponent } from "./component/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe, CartComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ngrxApp';

  counter$: Observable<number> = new Observable();

  constructor(private store: Store<AppState>) {
    this.counter$ = store.select(selectCount);
  }

  increment() {
    this.store.dispatch(incrementCounter());
  }

  decrement() {
    this.store.dispatch(decrementCounter());
  }
}
