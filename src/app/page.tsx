'use client'

import SubmissionContainer from "./Containers/SubmissionContainer";
const CourseworkContainer = dynamic(() => import("./Containers/CourseworkContainer"), {
  ssr: false,
});
import { Suspense } from "react";
import dynamic from "next/dynamic";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="flex bg-zuai-slate-100 sm:w-full min-h-screen">
        <div className="flex-grow flex flex-col justify-center items-center">
          <SubmissionContainer />
          <CourseworkContainer />
        </div>
      </main>
    </Suspense>
  );
}
