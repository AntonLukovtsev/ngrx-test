import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class AllInterceptor implements HttpInterceptor {
  private host = environment.host;

  private handleHostRequest(req: HttpRequest<any>) {
    return req.clone({
      url: this.host + req.url
    });
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.handleHostRequest(req));
  }
}
