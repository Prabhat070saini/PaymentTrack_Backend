import { Injectable } from '@nestjs/common';

import config from '../../config/env.config'

@Injectable()
export class CanDatabaseConfig {
 

  get databaseUri(): string {
    try {
      const uri = config.db.databaseUri;
      console.log(`Database URI: ${uri}`)
      if (!uri) {
        throw new Error('Database URI is not defined in the environment variables.');
      }
      return uri;
    } catch (error) {
      console.log('[Database Configuration] Error getting MongoDB URI:', error);
      throw error;
    }
  }
}
