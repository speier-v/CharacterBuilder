import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { EnvironmentService } from './modules/core/environment.service';
import { provideHttpClient } from '@angular/common/http';

export function loadEnvironment(envService: EnvironmentService) {
  return () => envService.loadEnv().subscribe({
      next: environment => {
        envService.setEnv(environment);
        console.info('Environment loaded: ');
      },
      error: error => {
        console.error('Environment not loaded:', error);
      },
    },
  );
}

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(),
    provideHttpClient(), EnvironmentService, {
      provide: APP_INITIALIZER,
      useFactory: loadEnvironment,
      deps: [EnvironmentService],
      multi: true
    },
  ],
};

