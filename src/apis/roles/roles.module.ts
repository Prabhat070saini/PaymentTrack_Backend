
import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RoleModel } from './models/role.model';
import { LibModule } from 'src/common/lib/lib.module';

@Module({
   imports: [
    MongooseModule.forFeature([{ name: "Role", schema: RoleModel.schema }]),
    LibModule
  ],
  controllers: [RolesController],
  providers: [RolesService]
})
export class RolesModule {}
