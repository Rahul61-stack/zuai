"use client";
import { memo, useState } from "react";
import EvaluationBar from "../Components/EvalutationBar";
// import PDFViewer from "../Components/PDFViewer";
const PDFViewer = dynamic(() => import("../Components/PDFViewer"), {
  ssr: false,
})
import { ZoomIn, MoveRight, ZoomOut, Maximize } from "lucide-react";
import dynamic from "next/dynamic";
const Page = () => {
  const [scale, setScale] = useState(0.8);
  return (
    <div className="px-4 flex flex-col gap-6">
      <div className="flex flex-col justify-center items-center w-full gap-[14px] ">
        <EvaluationBar />
        <div className="flex justify-start w-full">
          <div className="flex gap-2 p-4 bg-white rounded-3xl">
            <p className="text-zuai-purple-100">Check detailed Evaluation</p>
            <MoveRight className="text-zuai-purple-100" />
          </div>
        </div>
      </div>
      <div className="w-full p-3 bg-white rounded-3xl bg-opacity-45">
        <div className="py-2 px-3 rounded-xl bg-white w-fit">
          <p>Name</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5 items-center">
            <ZoomOut onClick={() => setScale((prev) => prev - 0.1)} />
            <p>{`${parseInt(String(100 * scale))}%`}</p>
            <ZoomIn onClick={() => setScale((prev) => prev + 0.1)} />
          </div>
          <div className="bg-white rounded-full">
            <Maximize />
          </div>
        </div>
        <PDFViewer scale={scale} />
      </div>
    </div>
  );
};

export default memo(Page);
