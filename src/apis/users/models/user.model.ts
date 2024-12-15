import { Schema, Document, model } from 'mongoose';
import { User } from '../interface/user.interface';



const UserSchema = new Schema<User>(
  {
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    phone_no: { type: String },
    address: { type: String },
    isActive: { type: Boolean, default: true },
    isInvited: { type: Boolean, default: false },
    roles: [{ type: Schema.Types.ObjectId, ref: 'Role' }], // Reference to Role model
  },
  { timestamps: true } // Adds createdAt and updatedAt automatically
);

export const UserModel = model<User>('User', UserSchema);
