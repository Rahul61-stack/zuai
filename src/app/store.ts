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
  };
  updateUploadedCourseWork: (file: File) => void;
  updateFileURL: (fileURL: string) => void;
  updateName:(name:string)=>void;
  updateSubmissions: (data: any) => void;

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
    reader.readAsText(file); // Reads the content of the file
  },
  updateFileURL: (fileURL: string) =>
    set((state) => ({
      ...state,
      uploadedCourseWork: {
        ...state.uploadedCourseWork,
        fileUrl: fileURL,
      },
    })),
  updateName:(name:string)=>set((state)=>({
    ...state,
    uploadedCourseWork:{
      ...state.uploadedCourseWork,
      name:name
    }
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
