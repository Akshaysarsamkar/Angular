import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideState, provideStore} from '@ngrx/store'
import { routes } from './app.routes';
import { reducer } from '../store/counter.reducer';
import { cartreducer } from '../store/cart/cart.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),provideStore(),provideState({name:'counter',reducer:reducer}),provideState({name:'cart',reducer:cartreducer})]
};
