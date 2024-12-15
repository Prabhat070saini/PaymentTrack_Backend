import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { OrganizationModule } from './organization/organization.module';
import { BillDetailsModule } from './bill-details/bill-details.module';

@Module({
  imports: [UsersModule, RolesModule, OrganizationModule, BillDetailsModule]
})
export class ApisModule {}
