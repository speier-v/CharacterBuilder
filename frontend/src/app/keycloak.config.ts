import { KeycloakOptions } from 'keycloak-angular';
import { environment } from '../environments/environment';

export const keycloakConfig: KeycloakOptions = {
  config: {
    url: environment.keycloakUrl,
    realm: environment.keycloakRealmName,
    clientId: environment.keycloakClientId,
  }
};

export default keycloakConfig;
