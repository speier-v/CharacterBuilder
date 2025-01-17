import {APP_INITIALIZER, ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideHttpClient} from '@angular/common/http';
import keycloakConfig from './keycloak.config';
import {KeycloakService} from 'keycloak-angular';
import {ApiService} from "./modules/core/api/api.service";
import {environment} from "../environments/environment";
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserAnimationsModule, provideAnimations } from "@angular/platform-browser/animations";

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init(keycloakConfig);
}

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(routes),
        //provideAnimationsAsync(),
        provideAnimations(),
        provideHttpClient(),
        KeycloakService,
        {
            provide: APP_INITIALIZER,
            useFactory: initializeKeycloak,
            deps: [KeycloakService],
            multi: true,
        },
        importProvidersFrom(NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })),
        importProvidersFrom(BrowserAnimationsModule)
    ],
};

