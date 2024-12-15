import { IsArray, IsString } from 'class-validator';

export class CreateRoleDto {
  @IsArray()
  @IsString({ each: true })
  rolesName: string[];  
}
