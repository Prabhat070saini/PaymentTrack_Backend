import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CAN_DATABASE_PROVIDER } from './database.provider';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { CanDatabaseConfig } from './database.config';
import { mongooseProviders } from './mongoose.providers';

@Module({
  imports: [
    ConfigModule.forRoot(), // Loads environment variables
    CAN_DATABASE_PROVIDER,
    mongooseProviders() 
  ],
  providers: [CanDatabaseConfig], // Provide the database configuration
  exports: [CAN_DATABASE_PROVIDER,CanDatabaseConfig], // Exports the MongooseModule
})
export class DatabaseModule implements OnApplicationBootstrap {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  async onApplicationBootstrap() {
    // Listen to MongoDB connection events
    this.connection.on('connected', () => {
      console.log('[Database connection] Successfully connected to MongoDB');
    });

    this.connection.on('error', (error) => {
      console.error('[Database connection] Error connecting to MongoDB:', error);
    });

    this.connection.on('disconnected', () => {
      console.warn('[Database connection] MongoDB connection disconnected');
    });
  }
}
