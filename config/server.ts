import { url } from "inspector";

export default ({ env }) => ({
  host: env('HOST', 'localhost'),
  url: 'oneten-costakids-dev-cms.azurewebsites.net',
  port: env.int('PORT', 443),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
