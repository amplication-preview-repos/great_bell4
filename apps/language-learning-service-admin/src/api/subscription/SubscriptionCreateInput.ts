import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionCreateInput = {
  endDate?: Date | null;
  status?: "Option1" | null;
  startDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
