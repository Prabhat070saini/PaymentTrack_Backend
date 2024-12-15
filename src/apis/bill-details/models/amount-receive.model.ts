import { Schema } from 'mongoose';
import { AmountReceive } from '../interface/bill-details.interface';

// Define the AmountReceive schema
export const AmountReceiveSchema = new Schema<AmountReceive>({
  _id: { type: Schema.Types.ObjectId, auto: true }, // Auto-generate ObjectId
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  receiver_name: { type: String, required: true },
});
