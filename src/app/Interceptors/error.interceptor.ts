import {
  HttpErrorResponse,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router: Router = inject(Router);
  const toastr: ToastrService = inject(ToastrService);
  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err) {
        switch (err.status) {
          case 400:
            if (err.error.errors) {
              const modelStatsErrors: string[] = [];
              for (const key in err.error.errors) {
                if (err.error.errors[key]) {
                  modelStatsErrors.push(err.error.errors[key]);
                }
              }
              throw modelStatsErrors.flat();
            } else {
              toastr.error('Bad Request', err.status.toString());
            }
            break;
          case 401:
            toastr.error(
              'Invalid authentication credentials',
              err.status.toString()
            );
            break;
          case 404:
            router.navigateByUrl('/not-found');
            break;
          case 500:
            const navigationExtras: NavigationExtras = {
              state: { error: err.error },
            };
            router.navigateByUrl('/server-error', navigationExtras);
            break;
          default:
            toastr.error('Unknown error');
            break;
        }
      }
      return throwError(() => err);
    })
  );
};
