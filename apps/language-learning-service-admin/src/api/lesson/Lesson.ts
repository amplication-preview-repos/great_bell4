import { Course } from "../course/Course";

export type Lesson = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  videoUrl: string | null;
  duration: number | null;
  course?: Course | null;
};
