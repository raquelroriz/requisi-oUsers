import { Address } from './Address';
import { Geo } from './Geo';
export interface User {
  id?: number;
  name: string;
  username?: string;
  email?: string;
  address?: Address;
  geo?: Geo;
}
