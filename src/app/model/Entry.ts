import { Category } from "./Category";

export interface Entry {
  id?: number,
  checkIn: Date,
  checkOut: Date,
  category: Category
}
