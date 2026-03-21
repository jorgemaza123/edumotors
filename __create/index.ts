import { createHonoServer } from 'react-router-hono-server/node';
import { createApp } from './app';

export default await createHonoServer({
  app: createApp(),
  defaultLogger: false,
});
