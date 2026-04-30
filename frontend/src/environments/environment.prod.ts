export const environment = {
  production: true,
  api: {
    server: 'http://13.234.75.187:5000/',
    mapKey: '',
    googleAuthClientId: '',
    webSocketUrl: 'ws://13.234.75.187:5000/websocket',
  },
  map: {
    tiles: {
      default: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
      dark: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    },
  },
  features: {
    restrictedMode: false,
    restrictedHeading: 'Restricted',
    restrictedMessage: 'This feature is currently disabled in this mode.',
  },
};
