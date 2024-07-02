import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {  withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenHttpInterceptor } from './token-http-interpreter';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),provideHttpClient(withInterceptors([tokenHttpInterceptor])),provideHttpClient(withFetch()),provideHttpClient()]
};
