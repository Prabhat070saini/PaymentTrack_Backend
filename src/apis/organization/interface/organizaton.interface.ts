import { Document } from 'mongoose';

export interface OrganizationOwner {
  _id: string;
  name: string;
  phone_no: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Organization extends Document {
  name: string;
  address: string;
  isActive: boolean;
  owner: OrganizationOwner; // Embedded document
  createdAt: Date;
  updatedAt: Date;
}
