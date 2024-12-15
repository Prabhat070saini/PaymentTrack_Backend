import { Schema, model } from 'mongoose';
import { BillDetails } from '../interface/bill-details.interface';
import { AmountReceiveSchema } from './amount-receive.model';

// Define the BillDetails schema
const BillDetailsSchema = new Schema<BillDetails>(
  {
    bill_no: { type: String, required: true },
    total_amount: { type: Number, required: true },
    total_received: { type: Number, default: 0 },
    created_by: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User
    organization: { type: Schema.Types.ObjectId, ref: 'Organization', required: true }, // Reference to Organization
    amount_received: [AmountReceiveSchema], // Embed AmountReceive schema
  },
  { timestamps: true }
);

export const BillDetailsModel = model<BillDetails>('BillDetails', BillDetailsSchema);
