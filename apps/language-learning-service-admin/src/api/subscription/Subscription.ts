import { User } from "../user/User";

export type Subscription = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  endDate: Date | null;
  status?: "Option1" | null;
  startDate: Date | null;
  user?: User | null;
};
