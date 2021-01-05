import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';
import { environment } from '@env/environment';

export class AuthHeaderInterceptor implements HttpInterceptor {
    readonly TOKEN_KEY = environment.localStoreKeys.userTokenKey;
    constructor(private localStorage: LocalStorageService) {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const tokenVal = this.localStorage.retrieve(this.TOKEN_KEY);
        const clonedRequest = req.clone({
            headers: req.headers.set(
                'Authorization',
                tokenVal ? `Bearer ${tokenVal}` : ''
            ),
        });

        return next.handle(clonedRequest);
    }
}
