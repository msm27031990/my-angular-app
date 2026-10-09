import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'; // Import the configuration object
import { App } from './app/app';

bootstrapApplication(App, appConfig) // Pass appConfig directly here
  .catch((err) => console.error(err));
