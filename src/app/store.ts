import { create } from "zustand";

interface Coursework {
  name: string;
  size: number;
  courseType: string;
  subject: string;
  content: string;
  rating: "A" | "B" | "C" | "NA";
}

type CourseStore = {
  submissions: Coursework[];
  uploadedCourseWork: {
    content: string;
  };
  updateUploadedCourseWork: (file: File) => void;
};

export const useCourseStore = create<CourseStore>((set) => ({
  submissions: [],
  uploadedCourseWork: {
    content: "",
  },
  updateUploadedCourseWork: (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      set((state) => ({
        ...state,
        uploadedCourseWork: { content: reader.result as string },
      }));
    };
    reader.readAsText(file); // Reads the content of the file
  },
}));
