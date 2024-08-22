"use client";

import { Label } from "@radix-ui/react-label";
import Coursework from "./Coursework";
import Subject from "./Subject";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { memo, useMemo, useState } from "react";
import { useCourseStore } from "../store";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { LoadingSpinner } from "./Loader";

const Submission = () => {
  const [showLoader, setShowLoader] = useState(false);
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
  const handleSubmission = () => {
    setShowLoader(true);
    fetch("https://dummyjson.com/posts/1")
      .then((res) => res.json())
      .then(() => {
        let existingEssays = localStorage.getItem("essays");
        let parsedEssays = existingEssays ? JSON.parse(existingEssays) : [];
        let updatedEssays = [...parsedEssays, uploadedCourseWork];
        let temp = JSON.stringify(updatedEssays);
        localStorage.setItem("essays", temp);
        updateSubmissions(uploadedCourseWork);
        router.push("/evaluation");
        setShowLoader(false);
      });
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
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <Button
                  className={cn(
                    evaluationDisabled
                      ? " bg-zuai-grey-400 "
                      : "bg-zuai-purple-100",
                    "p-2 rounded-3xl cursor-pointer"
                  )}
                  onClick={() => handleSubmission()}
                  disabled={evaluationDisabled}
                >
                  <div className="flex items-center">
                    <Image
                      alt="buttonimg"
                      height={24}
                      width={24}
                      src="/buttonimg.png"
                      className="bg-white rounded-full mr-2"
                    />
                    {showLoader ? (
                      <LoadingSpinner className="stroke-white" stroke="#FF0000" />
                    ) : (
                      <p className="text-white">Evaluate your score</p>
                    )}
                  </div>
                </Button>
              </TooltipTrigger>
              <TooltipContent></TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </>
  );
};

export default memo(Submission);
