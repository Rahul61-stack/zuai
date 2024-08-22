"use client";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Input } from "@/components/ui/input";
import React, { useMemo, useState } from "react";
import { useCourseStore } from "../store";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
    removeErrors,
  } = useCourseStore();

  const uploadingError = useMemo(() => {
    return (
      errors.find((error) => error.errorFor === "upload") ?? {
        message: "",
        error: false,
        errorFor: "upload",
      }
    );
  }, [errors]);

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
    } else if (droppedFile.size > FILE_SIZE_LIMIT) {
      setErrorMessage("File size exceeds the 25 MB limit.");
      updateErrors({
        message: "File size exceeds the 25 MB limit.",
        error: true,
        errorFor: "upload",
      });
      return;
    } else {
      convertToBlobAndSave(droppedFile);
      removeErrors("upload");
      return;
    }
  };

  //HANDLE MANUAL UPLOAD
  const handleUpload = (event: any) => {
    const droppedFile = event.target.files[0];
    handleErrors(droppedFile);
  };

  const convertToBlobAndSave = (droppedFile: File) => {
    setFile(droppedFile);
    let blobFile: Blob;
    blobFile = new Blob([droppedFile], { type: droppedFile.type });
    const blobURL = URL.createObjectURL(blobFile);
    updateFileURL(blobURL);
    setFileUrl(blobURL);
    readPDF(droppedFile);
  };

  //HANDLE DRAG AND DROP UPLOAD
  const handleDrop = (event: any) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    handleErrors(droppedFile);
  };

  const readPDF = (file: File) => {
    updateUploadedCourseWork(file);
  };

  return (
    <>
      <div
        className="flex flex-col items-center justify-center border-dashed border-2 border-zuai-purple-50 bg-white p-16 rounded-3xl"
        onDragOver={(event) => event.preventDefault()}
        onDrop={(e) => handleDrop(e)}
        onChange={(e) => handleUpload(e)}
      >
        {file ? (
          <>
            <div className="flex">
              <p>{file.name}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
                onClick={() => setFile(null)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </>
        ) : (
          <>
            <Image
              width={30}
              height={38}
              src="/upload_file.png"
              alt="Upload File"
              className="mb-4"
            />
            <div className="flex flex-col items-center justify-center">
              <p className="md:text-lg text-zuai-grey-100 sm:text-base font-semibold mb-2">
                Drag and drop a PDF
              </p>
              <p className="text-xs text-zuai-grey-100 mb-4 pb-2">
                *Limit 25 MB per file.
              </p>
            </div>
            <label
              htmlFor="file-upload"
              className={cn(
                uploadingError.error ? "border-red-500" : "",
                "cursor-pointer text-zuai-purple-100 border  px-4 py-2 shadow-sm opacity-95 shadow-zuai-purple-50  hover:bg-slate-100 rounded-3xl transition ease-in-out duration-300"
              )}
            >
              Upload your file
            </label>
            <p className="text-red-500 text-xs">{uploadingError.message}</p>
            <Input
              onChange={handleUpload}
              id="file-upload"
              type="file"
              className="hidden"
            />
          </>
        )}
      </div>
    </>
  );
}

export default DragDrop;
