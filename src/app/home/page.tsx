import CourseworkContainer from "../Containers/CourseworkContainer";
import SubmissionContainer from "../Containers/SubmissionContainer";

const Page = () => {
  return (
    <main className="flex bg-zuai-slate-100 sm:w-full min-h-screen">
      <div className="flex-grow flex flex-col w-full bg-zuai-purple-100 justify-center items-center gap-8">
        <SubmissionContainer />
        <CourseworkContainer />
      </div>
    </main>
  );
};

export default Page;
