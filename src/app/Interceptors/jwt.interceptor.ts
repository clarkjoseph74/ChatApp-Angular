import { HttpInterceptorFn } from '@angular/common/http';
import { AccountService } from '../Services/account.service';
import { inject } from '@angular/core';
import { User } from '../Models/user';
import { take } from 'rxjs';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const accountService: AccountService = inject(AccountService);
  let currentUser: User | null;
  accountService.currentUser$.pipe(take(1)).subscribe({
    next: (user) => (currentUser = user),
    complete: () => {
      if (currentUser) {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${currentUser.token}`,
          },
        });
      }
    },
  });

  return next(req);
};
