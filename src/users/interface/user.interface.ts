/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  role: string;
  age: number;
  salary?: number;
}
