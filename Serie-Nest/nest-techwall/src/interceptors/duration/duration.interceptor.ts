import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class DurationInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // const now = Date.now();
    // console.log("Before...");
    // console.log("After...");
    // console.log(`Duration: ${Date.now() - now}ms`);

    const dateIn = Date.now();
    console.log('Created date in: ', dateIn);
    return next.handle().pipe(
      tap(() => {
        const dateOut = Date.now();
        console.log('Created date out: ', dateOut);
        console.log(`Duration: ${dateOut - dateIn}ms`);
      })
    );
  }
}
