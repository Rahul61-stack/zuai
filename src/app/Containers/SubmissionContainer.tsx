import { memo, useState } from "react";
import UploadFile from "../Components/UploadFile";
import Submission from "../Components/Submission";
import Link from "next/link";

const SubmissionContainer = () => {
  // const [errors,setErrors] = useState<{errorMsg:string,error:boolean}>({
  //   errorMsg: '',
  //   error: false
  // })
  return (
    <>
      <div className="flex gap-2 justify-center items-end">
        <div className="w-[336px] md:w-[500px] xl:w-[600px] flex flex-col gap-4">
          <div className="text-wrap flex">
            <p className="text-black md:text-3xl text-[24px] font-bold">
              Hey IB Folks! Unsure about the quality of your answers?{" "}
              <span className="text-zuai-purple-100">
                We get you.
              </span>
            </p>
          </div>

          <div className="bg-zuai-white-500 w-[100%] p-4 rounded-3xl">
            <UploadFile />
            <Submission />
          </div>
        </div>
        <Link href={'/evaluation'}>Go to link</Link>
        <div className="hidden lg:flex lg:flex-col lg:justify-end">
          <img src="/IMG2.png" />
          <img src="/IMG1.png" />
        </div>
      </div>
    </>
  );
};

export default memo(SubmissionContainer);
