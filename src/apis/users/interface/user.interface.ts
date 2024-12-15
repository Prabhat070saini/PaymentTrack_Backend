export interface User extends Document {
  email: string;
  password: string;
  name: string;
  phone_no: string;
  address: string;
  isActive: boolean;
  isInvited: boolean;
  roles: string[]; // Array of Role IDs
  createdAt: Date;
  updatedAt: Date;
}