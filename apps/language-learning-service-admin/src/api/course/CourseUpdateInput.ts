import { LessonUpdateManyWithoutCoursesInput } from "./LessonUpdateManyWithoutCoursesInput";

export type CourseUpdateInput = {
  level?: "Option1" | null;
  title?: string | null;
  description?: string | null;
  lessons?: LessonUpdateManyWithoutCoursesInput;
};
