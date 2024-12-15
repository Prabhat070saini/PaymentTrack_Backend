import { Injectable } from '@nestjs/common';

import config from '../../config/env.config'

@Injectable()
export class CanDatabaseConfig {
 

  get databaseUri(): string {
    try {
      const uri = "mongodb+srv://abhishekkumarsaini427:P1R2a345@paymenttrackering.w53l5.mongodb.net/paymenttrackering";
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
