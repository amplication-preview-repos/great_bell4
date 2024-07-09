import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type LessonCreateInput = {
  title?: string | null;
  description?: string | null;
  videoUrl?: string | null;
  duration?: number | null;
  course?: CourseWhereUniqueInput | null;
};
