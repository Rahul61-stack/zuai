import SubmissionContainer from "./Containers/SubmissionContainer";
import Sidebar from "./Components/Sidebar";
import CourseworkContainer from "./Containers/CourseworkContainer";

export default function Home() {
  return (
    <main className="flex bg-zuai-slate-100 sm:w-full min-h-screen">
      <div className="flex-grow flex flex-col justify-center items-center">
        <SubmissionContainer />
        <CourseworkContainer />
      </div>
    </main>
  );
}
