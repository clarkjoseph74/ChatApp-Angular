import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { BusyService } from '../Services/busy.service';
import { delay, finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const busyServiece: BusyService = inject(BusyService);
  busyServiece.busyTasks();
  return next(req).pipe(
    delay(400),
    finalize(() => {
      busyServiece.idle();
    })
  );
};
