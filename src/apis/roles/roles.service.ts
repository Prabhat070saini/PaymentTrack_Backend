import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Role } from './interface/role.interface';
import { CreateRoleDto } from './dto/role.dto';
import { CodeGeneratorService } from '../../common/lib/uniqueCode/code-generate.service';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel('Role') private readonly roleModel: Model<Role>,
    private readonly codeGenerate: CodeGeneratorService,
  ) {}

  // Method to create multiple roles if they don't already exist
  async createRole(createRoleDto: CreateRoleDto): Promise<any> {
    // Step 1: Find existing roles in the database
    const existingRoles = await this.roleModel.find({
      name: { $in: createRoleDto.rolesName },
    }).exec();

    // Step 2: Check if any roles already exist
    if (existingRoles.length > 0) {
      const existingRoleNames = existingRoles.map(role => role.name);
      return {
        message: 'Some roles already exist',
        existingRoles: existingRoleNames,
      };
    }

    // Step 3: Generate code and create new roles
    const rolesData = createRoleDto.rolesName.map((roleName) => {
      const code = this.codeGenerate.generateCode();  
      return {
        name: roleName,
        code,  
        isActive: true,  
      };
    });

    // Step 4: Create the new roles in the database
    const newRoles = await this.roleModel.insertMany(rolesData);

    return {
      message: 'Roles created successfully',
      newRoles,
    };
  }

  // Method to get all roles
  async getRoles(): Promise<Role[]> {
    return this.roleModel.find().exec();
  }
}
