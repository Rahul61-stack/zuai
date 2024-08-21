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
    fileUrl: string;
    name: string;
    courseType: string;
    subject: string;
  };
  errors: {
    message: string;
    error: boolean;
    errorFor: string;
  }[];
  updateUploadedCourseWork: (file: File) => void;
  updateFileURL: (fileURL: string) => void;
  updateName: (name: string) => void;
  updateSubject: (name: string) => void;
  updateCourseworkType: (name: string) => void;
  updateSubmissions: (data: any) => void;
  updateErrors: (errorObj: {
    message: string;
    error: boolean;
    errorFor: string;
  }) => void;
};

export const useCourseStore = create<CourseStore>((set) => ({
  submissions: [],
  uploadedCourseWork: {
    content: "",
    fileUrl: "",
    name: "",
    courseType: "",
    subject: "",
  },
  errors: [],
  updateUploadedCourseWork: (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      set((state) => ({
        ...state,
        uploadedCourseWork: {
          ...state.uploadedCourseWork,
          content: reader.result as string,
        },
      }));
    };
    reader.readAsText(file);
  },

  updateErrors: (errorObj: {
    message: string;
    error: boolean;
    errorFor: string;
  }) =>
    set((state) => ({
      ...state,
      errors: [
        ...state.errors,
        {
          error: errorObj.error,
          message: errorObj.message,
          errorFor: errorObj.errorFor,
        },
      ],
    })),
  updateFileURL: (fileURL: string) =>
    set((state) => ({
      ...state,
      uploadedCourseWork: {
        ...state.uploadedCourseWork,
        fileUrl: fileURL,
      },
    })),
  updateName: (name: string) =>
    set((state) => ({
      ...state,
      uploadedCourseWork: {
        ...state.uploadedCourseWork,
        name: name,
      },
    })),
  updateSubject: (subject: string) =>
    set((state) => ({
      ...state,
      uploadedCourseWork: {
        ...state.uploadedCourseWork,
        subject: subject,
      },
    })),
  updateCourseworkType: (courseType: string) =>
    set((state) => ({
      ...state,
      uploadedCourseWork: {
        ...state.uploadedCourseWork,
        courseType: courseType,
      },
    })),
  updateSubmissions: (data: any) =>
    set((state) => ({
      ...state,
      submissions: [
        ...state.submissions,
        {
          name: data.name,
          size: data.size,
          courseType: data.courseType,
          subject: data.subject,
          content: data.content,
          rating: data.rating,
        },
      ],
    })),
}));
