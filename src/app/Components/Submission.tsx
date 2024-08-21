"use client";

import { Label } from "@radix-ui/react-label";
import Coursework from "./Coursework";
import Subject from "./Subject";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { memo, useMemo } from "react";
import { useCourseStore } from "../store";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const Submission = () => {
  const router = useRouter();
  const {
    uploadedCourseWork,
    updateName,
    errors,
    updateErrors,
    updateSubmissions,
  } = useCourseStore();
  const evaluationDisabled = useMemo(() => {
    if (Object.values(uploadedCourseWork).some((value) => value === "")) {
      return true;
    } else return false;
  }, [uploadedCourseWork]);
  console.log(uploadedCourseWork, "Rehul");
  const handleSubmission = () => {
    let existingEssays = localStorage.getItem('essays');
    let parsedEssays = existingEssays ? JSON.parse(existingEssays) : [];
    let updatedEssays = [...parsedEssays, uploadedCourseWork];
    let temp = JSON.stringify(updatedEssays);
    console.log(temp, "Rehul");
    localStorage.setItem("essays", temp);
    updateSubmissions(uploadedCourseWork);
    router.push("/evaluation");
  };
  return (
    <>
      <div className="flex flex-col gap-4 mt-2">
        <div className="flex flex-col gap-2">
          <Label className="text-zuai-grey-100 ">
            Select your coursework & subject*
          </Label>
          <div className="flex flex-col md:flex-row gap-2 rounded-3xl">
            <Coursework />
            <Subject />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-zuai-grey-100 ">
            Enter your essay title* (Required)
          </Label>
          <Input
            value={uploadedCourseWork.name}
            type="text"
            placeholder="how nations work...."
            className="w-[90%] md:w-[60%] rounded-3xl"
            onChange={(e) => updateName(e.target.value)}
          />
        </div>
        <div className="">
          <Button
            className={cn(
              evaluationDisabled ? " bg-zuai-grey-400 " : "bg-zuai-purple-100",
              "p-2 rounded-3xl"
            )}
            onClick={() => handleSubmission()}
            disabled={evaluationDisabled}
          >
            <div className="flex">
              <img
                src="/buttonimg.png"
                className="bg-white rounded-full mr-2"
              />
              <p className="text-white">Evaluate your score</p>
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

export default memo(Submission);
