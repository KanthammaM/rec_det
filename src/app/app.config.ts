import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ReceiverDetailsModule } from '../receiver-details/receiver-details.module';

export const appConfig: ApplicationConfig = {
  providers:  [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(ReceiverDetailsModule)
  ]
};
