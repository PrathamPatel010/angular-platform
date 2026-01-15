import { inject } from '@angular/core';
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { CommonService } from '../services/common.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const commonService = inject(CommonService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let message = 'Something went wrong';

      if (error.error?.message) {
        message = error.error.message;
      } else if (error.status === 0) {
        message = 'Network error. Please check your connection.';
      } else if (error.status >= 500) {
        message = 'Server error. Please try again later.';
      }

      commonService.notificationService.error(message);

      return throwError(() => error);
    }),
  );
};
