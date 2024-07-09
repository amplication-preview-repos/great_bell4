import { Lesson } from "../lesson/Lesson";

export type Course = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  level?: "Option1" | null;
  title: string | null;
  description: string | null;
  lessons?: Array<Lesson>;
};
