import { Label } from "@radix-ui/react-label";
import Coursework from "./Coursework";
import Subject from "./Subject";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { memo } from "react";

const Submission = () => {
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
            type="text"
            placeholder="how nations work...."
            className="w-[90%] md:w-[60%] rounded-3xl"
          />
        </div>
        <div className="">
          <Button className=" bg-zuai-grey-400 p-2 rounded-3xl">
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
