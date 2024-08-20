"use client";

import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop() {
  const [files, setFiles] = useState<any[]>([]);

const handleDrop = (event:any) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles.length > 0) {
      const newFiles = Array.from(droppedFiles);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };
  console.log(files)
  return (
    <>
      <div
        className="flex flex-col items-center justify-center border-dashed border-2 border-zuai-purple-50 bg-white p-16 rounded-3xl"
        onDragOver={(event) => event.preventDefault()}
        onDrop={handleDrop}
      >
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
          id="file-upload"
          type="file"
          className="hidden"
          // Additional file input properties here
        />
      </div>
    </>
  );
}

export default DragDrop;
