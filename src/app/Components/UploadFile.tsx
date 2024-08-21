"use client";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useCourseStore } from "../store";

const FILE_SIZE_LIMIT = 25 * 1024 * 1024; // 25 MB

function DragDrop() {
  const [file, setFile] = useState<any>(null);
  const [fileUrl, setFileUrl] = useState("");
  const {
    updateUploadedCourseWork,
    uploadedCourseWork,
    updateFileURL,
    errors,
    updateErrors,
  } = useCourseStore();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleErrors = (droppedFile: File) => {
    if (droppedFile.type !== "application/pdf") {
      setErrorMessage("Please upload a PDF file");
      updateErrors({
        message: "Please upload a PDF file",
        error: true,
        errorFor: "upload",
      });
      return;
    }
    if (droppedFile.size > FILE_SIZE_LIMIT) {
      setErrorMessage("File size exceeds the 25 MB limit.");
      updateErrors({
        message: "File size exceeds the 25 MB limit.",
        error: true,
        errorFor: "upload",
      });
      return;
    }
  };

  //HANDLE MANUAL UPLOAD
  const handleUpload = (event: any) => {
    let blobFile: Blob;
    const droppedFile = event.target.files[0];
    setFile(droppedFile);
    handleErrors(droppedFile);
    blobFile = new Blob([droppedFile], { type: droppedFile.type });
    const blobURL = URL.createObjectURL(blobFile);
    updateFileURL(blobURL);
    setFileUrl(blobURL);
    // const link = document.createElement("a");
    // link.href = blobURL;
    // link.download = "downloaded-file";
    // document.body.appendChild(link);

    // link.click();

    readPDF(droppedFile);
  };

  //HANDLE DRAG AND DROP UPLOAD
  const handleDrop = (event: any) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    setFile(droppedFile);
    handleErrors(droppedFile);
    let blobFile = new Blob([droppedFile], { type: droppedFile.type });
    const blobURL = URL.createObjectURL(blobFile);
    updateFileURL(blobURL);
    setFileUrl(blobURL);
    readPDF(droppedFile);
  };

  const readPDF = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = reader.result as string;
      updateUploadedCourseWork(file);
      localStorage.setItem("uploadedCourseWork", content);
      setErrorMessage(null);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <div
        className="flex flex-col items-center justify-center border-dashed border-2 border-zuai-purple-50 bg-white p-16 rounded-3xl"
        onDragOver={(event) => event.preventDefault()}
        onDrop={handleDrop}
        onChange={handleUpload}
      >
        {file ? (
          <>
            <div className="flex">
              <p>{file.name}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
                onClick={() => setFile(null)}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </>
        ) : (
          <>
            <img src="/upload_file.png" alt="Upload File" className="mb-4" />
            <div className="flex flex-col items-center justify-center">
              <p className="text-lg text-zuai-grey-100 font-semibold mb-2">
                Drag and drop a PDF
              </p>
              <p className="text-xs text-zuai-grey-100 mb-4 pb-2">
                *Limit 25 MB per file.
              </p>
            </div>
            <label
              htmlFor="file-upload"
              className="cursor-pointer text-zuai-purple-100 text-blue-500 border border-blue-500 px-4 py-2 shadow-sm opacity-95 shadow-zuai-purple-50 bg-blue-100 hover:bg-blue-200 rounded-3xl"
            >
              Upload your file
            </label>
            <Input
              onChange={handleUpload}
              id="file-upload"
              type="file"
              className="hidden"
              // Additional file input properties here
            />
          </>
        )}
      </div>
    </>
  );
}

export default DragDrop;
