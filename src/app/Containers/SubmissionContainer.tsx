import { memo } from "react";
import UploadFile from "../Components/UploadFile";
import Submission from "../Components/Submission";

const SubmissionContainer = () => {
  return (
    <>
      <div className="flex gap-2 justify-center items-end">
        <div className="w-[600px]">
          <div className="text-wrap flex">
            <p className="text-black text-3xl font-bold">
              Hey IB Folks! Unsure about the quality of your answers?{" "}
              <span className="text-zuai-purple-100 text-3xl font-bold">
                We get you.
              </span>
            </p>
          </div>

          <div className="bg-zuai-white-500 w-[100%] p-4 rounded-3xl">
            <UploadFile />
            <Submission />
          </div>
        </div>

        <div className="flex flex-col justify-end">
          <img src="/IMG2.png" />
          <img src="/IMG1.png" />
        </div>
      </div>
    </>
  );
};

export default memo(SubmissionContainer);
