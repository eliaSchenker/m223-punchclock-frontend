import { Category } from "./Category";

/**
 * Entry model interface
 * Author: Elia Schenker
 * Last change: 15.07.2022
 */
export interface Entry {
  id?: number,
  checkIn?: Date,
  checkOut?: Date,
  category: Category
}
