"use client";
import { Suspense } from "react";
import SubmissionContainer from "../Containers/SubmissionContainer";
import dynamic from "next/dynamic";
import { LoadingSpinner } from "../Components/Loader";
const CourseworkContainer = dynamic(
  () => import("../Containers/CourseworkContainer"),
  {
    ssr: false,
  }
);

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="flex bg-zuai-slate-100 sm:w-full min-h-screen">
        <div className="flex-grow flex flex-col w-full bg-zuai-purple-100 justify-center items-center gap-8">
          <SubmissionContainer />
          <CourseworkContainer />
        </div>
      </main>
    </Suspense>
  );
};

export default Page;
