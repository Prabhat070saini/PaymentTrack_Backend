import {Types} from "mongoose"
import { User } from "src/apis/users/interface/user.interface";

export interface AmountReceive {
  _id: Types.ObjectId; // ObjectId for embedded document ID
  amount: number;
  date: Date;
  receiver_name: string;
}

export interface BillDetails extends Document {
  bill_no: string;
  total_amount: number;
  total_received: number;
  created_by: Types.ObjectId | any; // Allow reference to `User` or populated document
  organization: Types.ObjectId | any; // Allow reference to `Organization` or populated document
  amount_received: AmountReceive[]; // Embedded array
  createdAt: Date;
  updatedAt: Date;
}
export interface RequestOrg extends Document {
  name: string;
  address: string;
  owner: {
    name: string;
    phone_no: string;
  };
  created_by: Types.ObjectId | User; // Support both ObjectId and populated User
  createdAt: Date;
  updatedAt: Date;
}
