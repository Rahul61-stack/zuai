"use client";

import { memo } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useCourseStore } from "../store";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = '//unpkg.com/pdfjs-dist@4.4.168/build/pdf.worker.min.mjs';
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();
// import * as PDFJS from 'pdfjs-dist/build/pdf.worker.min.mjs';
// const workerSrc = '`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS.version}/pdf.worker.min.js`';
// PDFJS.GlobalWorkerOptions.workerSrc = workerSrc;
const PDFViewer = ({ scale }: { scale: number }) => {
  const fileUrl = useCourseStore((state) => state.uploadedCourseWork.fileUrl);
  return (
    <div className="overflow-x-scroll w-full max-w-full">
      {fileUrl !== "" && (
        <Document
          file={fileUrl}
          onLoadError={(error) => console.error("Error loading PDF:", error)}
          options={{
            cMapUrl: "/cmaps/",
            standardFontDataUrl: "/standard_fonts/",
          }}
        >
          <Page scale={scale} renderTextLayer={false} pageNumber={1} />
        </Document>
      )}
    </div>
  );
};

export default memo(PDFViewer);
