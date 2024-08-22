"use client";
import { memo, useState } from "react";
import EvaluationBar from "../Components/EvalutationBar";
// import PDFViewer from "../Components/PDFViewer";
import { BrowserView, MobileView, TabletView } from "react-device-detect";
const PDFViewer = dynamic(() => import("../Components/PDFViewer"), {
  ssr: false,
});
import { ZoomIn, MoveRight, ZoomOut, Maximize } from "lucide-react";
import dynamic from "next/dynamic";
import EvaluationCriteria from "../Components/EvaluationCriteria";
import { evaluationCriteria } from "../Constants/constants";
import { useCourseStore } from "../store";
const Page = () => {
  const [showDetails, setShowDetails] = useState(true);
  const {uploadedCourseWork} = useCourseStore()
  const [scale, setScale] = useState(0.8);
  return (
    <div>
      <MobileView>
        <div className="px-4 flex flex-col gap-6">
          <div className="flex flex-col justify-center items-center w-full gap-[14px] ">
            <EvaluationBar />
            <div className="flex justify-start w-full">
              <div
                className="flex gap-2 p-4 bg-white rounded-3xl"
                onClick={() => setShowDetails((prev) => !prev)}
              >
                <p className="text-zuai-purple-100">
                  {showDetails
                    ? "Check detailed Evaluation"
                    : "Expand and view your file"}
                </p>
                <MoveRight className="text-zuai-purple-100" />
              </div>
            </div>
          </div>
          {showDetails ? (
            <div className="w-full p-3 bg-white rounded-3xl bg-opacity-45 flex flex-col gap-2">
              <div className="py-2 px-3 rounded-xl bg-white w-fit">
                <p>{uploadedCourseWork.name+'.pdf'}</p>
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
          ) : (
            <>
              {evaluationCriteria.map((criteria, idx) => (
                <div key={idx} className="gap-2">
                  <EvaluationCriteria
                    criteriaName={criteria.criteriaName}
                    criteriaValue={criteria.criteriaValue}
                    summary={criteria.summary}
                    strengths={criteria.strengths}
                    improvements={criteria.improvements}
                    evaluation={criteria.evaluation}
                  />
                </div>
              ))}
            </>
          )}
        </div>
      </MobileView>
      <BrowserView>
        <div className="flex flex-row pt-16 px-20 pb-6 gap-6">
          <div className="basis-1/2 p-3 bg-white rounded-3xl bg-opacity-45">
            <div className="py-2 px-3 rounded-xl bg-white w-fit">
            <p>{uploadedCourseWork.name}</p>
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
          <div className="basis-1/2 flex max-h- flex-col justify-between gap-3.5">
            <EvaluationBar />
            {evaluationCriteria.map((criteria, idx) => (
              <div key={idx} className="gap-2">
                <EvaluationCriteria
                  criteriaName={criteria.criteriaName}
                  criteriaValue={criteria.criteriaValue}
                  summary={criteria.summary}
                  strengths={criteria.strengths}
                  improvements={criteria.improvements}
                  evaluation={criteria.evaluation}
                />
              </div>
            ))}
          </div>
        </div>
      </BrowserView>
    </div>
  );
};

export default memo(Page);
