import { Category } from "./Category";

export interface Entry {
  id?: number,
  checkIn: Date,
  checkout: Date,
  category: Category
}
