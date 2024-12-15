import { Schema } from 'mongoose';
import { OrganizationOwner } from '../interface/organizaton.interface';

export const OrganizationOwnerSchema = new Schema<OrganizationOwner>({
  name: { type: String, required: true },
  phone_no: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
