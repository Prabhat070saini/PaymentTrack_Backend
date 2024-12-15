import { Schema, model } from 'mongoose';
import { Organization } from '../interface/organizaton.interface';
import { OrganizationOwnerSchema } from './ogr-owner.model'; // Import the OrganizationOwner schema

const OrganizationSchema = new Schema<Organization>(
  {
    name: { type: String, required: true },
    address: { type: String },
    isActive: { type: Boolean, default: true },
    owner: { type: OrganizationOwnerSchema, required: true }, // Reference the embedded OrganizationOwner schema
  },
  { timestamps: true }
);

export const OrganizationModel = model<Organization>('Organization', OrganizationSchema);
