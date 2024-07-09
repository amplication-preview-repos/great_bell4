import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type LessonWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  videoUrl?: StringNullableFilter;
  duration?: IntNullableFilter;
  course?: CourseWhereUniqueInput;
};
