import { MongooseModule } from "@nestjs/mongoose";

export const CAN_DATABASE_PROVIDER = MongooseModule.forRootAsync({
  useFactory: async () => {
    const uri = process.env.DB_URI;
    try {
      if (!uri) {
        throw new Error('[Database connection] DB_URI is undefined.');
      }
      console.log(`[Database connection] Connecting to MongoDB at ${uri}`);
      return { uri };
    } catch (error) {
      console.error('[Database connection] Failed to connect:', error);
      throw error;
    }
  },
});
