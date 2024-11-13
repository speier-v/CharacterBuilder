import {APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideHttpClient} from '@angular/common/http';
import keycloakConfig from './keycloak.config';
import {KeycloakService} from 'keycloak-angular';
import {ApiService} from "./modules/core/api/api.service";
import {environment} from "../environments/environment";

function initializeKeycloak(keycloak: KeycloakService) {
    return () =>
        keycloak.init({
            config: keycloakConfig.config,
            initOptions: keycloakConfig.initOptions,
        });
}

function testApiConnection(apiService: ApiService) {
    return () => apiService.get(`${environment.backendUrl}/test`).subscribe({
            next: value => {
                console.log(value);
            }, error: err => {
                console.error(err);
            }
        }
    );
}

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(routes),
        provideAnimationsAsync(),
        provideHttpClient(),
        KeycloakService,
        {
            provide: APP_INITIALIZER,
            useFactory: initializeKeycloak,
            deps: [KeycloakService],
            multi: true,
        },
        ApiService,
        {
            provide: APP_INITIALIZER,
            useFactory: testApiConnection,
            deps: [ApiService],
            multi: true,
        },
    ],
};

