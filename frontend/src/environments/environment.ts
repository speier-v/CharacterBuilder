export const environment = {
  keycloak: {
    url: 'https://localhost:8443',
    realmName: 'charactyr-users',
    clientId: 'charactyr-frontend',
  },
  resourceRoots: {
    images: {
      background: 'assets/images/background',
      characterFrames: {
        default: 'assets/images/character-frames/default',
        mini: 'assets/images/character-frames/mini',
        medium: 'assets/images/character-frames/medium',
      },
      icons: 'assets/images/icons',
    },
  },
  backendUrl: 'http://localhost:8090',
};