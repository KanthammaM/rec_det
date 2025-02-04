import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { routes } from './app/app-routing.module';


  bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes)], // Provide routing setup
  }).catch((err) => console.error(err));