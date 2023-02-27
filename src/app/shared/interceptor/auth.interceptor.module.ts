import { Injectable, NgModule } from "@angular/core";
import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { storage } from "../utils/storage";
import { KeysStorage } from "../enums/keys-storage.enum";

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // const _token = storage.getEncripted(KeysStorage.TOKEN);
    const _token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzYsImlkX3VzdWFyaW9fdXRpbGl6YWRvciI6MCwiaXNBRE0iOiJTIiwiaWF0IjoxNjcxMDYzNDg2LCJleHAiOjI1OTIxNjcxMDYzNDg2fQ.IIgHfZ6uEOiPKDJqq5oLHrW7CQQxY4OYIrTL0056uvs"
    let dupReq = req;
    if (_token)
      dupReq = req.clone({
        headers: req.headers.set("x-access-token",_token ? _token : "").set("Accept", "application/json")

      });

    return next.handle(dupReq).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          event = event.clone({ body: this.modifyBody(event.body) });
        }
        return event;
      })
    );
  }

  private modifyBody(body: any) {}
}

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsRequestInterceptor,
      multi: true,
    },
  ],
})
export class Interceptor {}

// 'JSONResponse' object has no attribute 'is_superuser'\nTraceback
