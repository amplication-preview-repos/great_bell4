import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionWhereInput = {
  id?: StringFilter;
  endDate?: DateTimeNullableFilter;
  status?: "Option1";
  startDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
