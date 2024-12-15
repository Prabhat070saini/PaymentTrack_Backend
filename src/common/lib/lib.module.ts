import { Module } from '@nestjs/common';
import { CodeGeneratorService } from './uniqueCode/code-generate.service';

@Module({
    providers:[CodeGeneratorService],
    exports:[CodeGeneratorService]
})
export class LibModule {}
