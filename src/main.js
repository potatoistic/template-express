import ENV from '@config/dotenv';
import App from './app';

const app = new App();

app.server.listen(ENV.NODE_PORT, () => {
  // eslint-disable-next-line no-console
  console.log('[HTTP] server ready: http://localhost:3000 🚀');
});
