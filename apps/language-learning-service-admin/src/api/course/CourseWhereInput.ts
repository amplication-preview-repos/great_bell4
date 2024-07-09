import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LessonListRelationFilter } from "../lesson/LessonListRelationFilter";

export type CourseWhereInput = {
  id?: StringFilter;
  level?: "Option1";
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  lessons?: LessonListRelationFilter;
};
