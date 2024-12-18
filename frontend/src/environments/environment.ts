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
      },
      icons: 'assets/images/icons',
    },
  },
};