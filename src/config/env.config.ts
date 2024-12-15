import * as dotenv from 'dotenv';
dotenv.config();

export default {
  app: {
    port: parseInt(process.env.PORT),
  },
  jwt: {
    authTokenSecret: process.env.AUTH_TOKEN_SECRET,
    authTokenExpiry: process.env.AUTH_TOKEN_EXPIRY,
    authTempTokenSecret: process.env.AUTH_TEMP_TOKEN_SECRET,
  },
  db: {
    dialect: process.env.DB_DIALECT,
    poolMin: parseInt(process.env.DB_POOL_MIN),
    poolMax: parseInt(process.env.DB_POOL_MAX),
    connectionTimeout: parseInt(process.env.DB_CONNECTION_TIMEOUT),
    idleTimeout: parseInt(process.env.DB_IDLE_TIMEOUT),
    port: parseInt(process.env.DB_PORT),
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    databaseUri: process.env.DB_Uri,
    logging: process.env.DB_LOGGING,
    sync: { alter: false },
    retryCount: parseInt(process.env.DB_RETRY_MAX_CONNECTION_ATTEMPTS),
  },
  salt: process.env.SALT_ROUND,
  externalAPI: {},
};
