import { Location } from "./Location";

/**
 * User model interface
 * Author: Elia Schenker
 * Last change: 15.07.2022
 */
export interface User {
  id?: number,
  username: string;
  password?: string;
  role: string;
  location: Location;
}
