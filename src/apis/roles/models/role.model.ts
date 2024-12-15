import { Schema, Document, model } from 'mongoose';
import { Role } from '../interface/role.interface';


const RoleSchema = new Schema<Role>(
  {
    name: { type: String, required: true, unique: true },
    code: { type: String, required: true, unique: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const RoleModel = model<Role>('Role', RoleSchema);
