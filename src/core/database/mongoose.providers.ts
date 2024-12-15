import { MongooseModule } from '@nestjs/mongoose';
import * as fs from 'fs';
import * as path from 'path';

export const mongooseProviders = () => {
  const schemas = [];
  
  // Check if we're in production or development
  const isProd = process.env.NODE_ENV === 'production'; 
  const modelsPath = isProd
    ? path.join(__dirname, '../../dist/apis') // For production (compiled files)
    : path.join(__dirname, '../../src/apis'); // For development (uncompiled files)

  try {
    const files = fs.readdirSync(modelsPath);

    files.forEach((file) => {
      // Only require .ts or .js files
      if (file.endsWith('.ts') || file.endsWith('.js')) {
        const model = require(path.join(modelsPath, file));
        
        // Check if the model has a schema and push it to the schemas array
        if (model.schema) {
          schemas.push({
            name: model.name,
            schema: model.schema,
          });
        }
      }
    });
  } catch (error) {
    console.error(`[Database Provider] Error reading models: ${error}`);
  }

  // Return MongooseModule for the schemas if found, or return an empty module
  return schemas.length > 0
    ? MongooseModule.forFeature(schemas)
    : MongooseModule.forFeature([]); // Return empty module if no schemas
};
