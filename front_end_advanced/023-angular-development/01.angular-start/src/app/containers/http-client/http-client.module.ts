import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientComponent } from './http-client.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorInterceptor } from 'src/app/auth-interceptor.interceptor';



@NgModule({
  declarations: [HttpClientComponent],
  imports: [CommonModule],
  exports: [HttpClientComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true
    }
  ]
})
export class HttpClientComponentModule { }
