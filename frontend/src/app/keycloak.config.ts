import { KeycloakOptions } from 'keycloak-angular';
import { environment } from '../environments/environment';

export const keycloakConfig: KeycloakOptions = {
  config: {
    url: environment.keycloakUrl,
    realm: environment.keycloakRealmName,
    clientId: environment.keycloakClientId,
  },
  loadUserProfileAtStartUp: true,
  initOptions: {
    onLoad: 'login-required',
  },
};

export default keycloakConfig;
