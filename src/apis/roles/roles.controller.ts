import { Controller, Post, Body, Get } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/role.dto';
import { Role } from './interface/role.interface';


@Controller({path:"roles",version:'1'})
export class RolesController {
  constructor(private readonly roleService: RolesService) {}

  // Endpoint to create a new role
  @Post()
  async createRole(@Body() createRoleDto: CreateRoleDto): Promise<Role> {
    return this.roleService.createRole(createRoleDto);
  }

  // Endpoint to get all roles
  @Get()
  async getRoles(): Promise<Role[]> {
    return this.roleService.getRoles();
  }
}
