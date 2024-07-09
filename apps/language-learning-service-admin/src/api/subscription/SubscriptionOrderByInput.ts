import { SortOrder } from "../../util/SortOrder";

export type SubscriptionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  endDate?: SortOrder;
  status?: SortOrder;
  startDate?: SortOrder;
  userId?: SortOrder;
};
