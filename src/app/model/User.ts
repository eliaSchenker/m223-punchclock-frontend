import { Location } from "./Location";

export interface User {
  id?: number,
  username: string;
  password?: string;
  role: string;
  location: Location;
}
