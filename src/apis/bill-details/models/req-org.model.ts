import { Schema, model, Types } from 'mongoose';
import { RequestOrg } from '../interface/bill-details.interface';


const RequestOrgSchema = new Schema<RequestOrg>(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    owner: {
      name: { type: String, required: true },
      phone_no: { type: String, required: true },
    },
    created_by: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User
  },
  { timestamps: true }
);

export const RequestOrgModel = model<RequestOrg>('RequestOrg', RequestOrgSchema);
