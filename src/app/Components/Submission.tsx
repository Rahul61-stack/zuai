import { Label } from "@radix-ui/react-label";
import Coursework from "./Coursework";
import Subject from "./Subject";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { memo } from "react";

const Submission = () => {
  return (
    <>
      <div className="pt-10 pl-5">
        <div>
          <Label className="text-zuai-grey-100 pb-2">
            Select your coursework & subject*
          </Label>
          <div className="flex gap-x-4 rounded-3xl pb-4">
            <Coursework />
            <Subject />
          </div>
        </div>
        <Label className="text-zuai-grey-100 pb-2">
          Enter your essay title* (Required)
        </Label>
        <Input
          type="text"
          placeholder="how nations work...."
          className="w-[60%] rounded-3xl"
        />
        <div className="pt-4">
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

export default memo(Submission)
