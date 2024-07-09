import { JsonValue } from "type-fest";
import { Subscription } from "../subscription/Subscription";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  subscriptions?: Array<Subscription>;
};
