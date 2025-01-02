import { KeycloakOptions } from 'keycloak-angular';
import { environment } from '../environments/environment';

export const keycloakConfig: KeycloakOptions = {
  config: {
    url: environment.keycloak.url,
    realm: environment.keycloak.realmName,
    clientId: environment.keycloak.clientId,
  },
  loadUserProfileAtStartUp: true,
  initOptions: {
    onLoad: 'login-required',
  },
};

export default keycloakConfig;
