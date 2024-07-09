import { LessonCreateNestedManyWithoutCoursesInput } from "./LessonCreateNestedManyWithoutCoursesInput";

export type CourseCreateInput = {
  level?: "Option1" | null;
  title?: string | null;
  description?: string | null;
  lessons?: LessonCreateNestedManyWithoutCoursesInput;
};
