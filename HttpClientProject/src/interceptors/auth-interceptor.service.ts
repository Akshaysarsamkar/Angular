import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { tap } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    const newReq = req.clone({
      url: '/test-url',
      headers: req.headers.append('auth', 'value'),
    });
    console.log('This is Request Interceptor', req);
    console.log('This is newRequest Interceptor', newReq);
    return next.handle(req).pipe(tap((event) => console.log('responce Intercepted',event)));
  }
}
