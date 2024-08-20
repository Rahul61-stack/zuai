import EvaluationContainer from "./Containers/EvaluationContainer";
import Sidebar from "./Components/Sidebar";
import CourseworkContainer from "./Containers/CourseworkContainer";

export default function Home() {
  return (
    <main className="flex bg-zuai-slate-100 p-24 min-h-screen">
     <div className="h-screen w-[52px] border-r-2 border-gray-200 bg-white fixed top-0 left-0 flex-shrink-0">
        <Sidebar />
      </div>

      <div className="flex-grow flex flex-col justify-center items-center">
        <EvaluationContainer />
        <CourseworkContainer/>
      </div>
    </main>
  );
}
