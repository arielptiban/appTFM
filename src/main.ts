import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NavigationEnd, Router } from '@angular/router';

let dynamicTitle = 'Título por defecto';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

