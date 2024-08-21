import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { CircleCheck, CircleAlert } from "lucide-react";

const EvaluationCriteria = ({
  criteriaName,
  criteriaValue,
  summary,
  strengths,
  improvements,
  evaluation,
}: {
  criteriaName: string;
  criteriaValue: string;
  summary: string;
  strengths: string[];
  improvements: string[];
  evaluation: number;
}) => {
  return (
    <>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            {" "}
            <div className="flex gap-4">
              <div className="relative w-16 h-16">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 36 36"
                >
                  <circle
                    className="text-gray-300"
                    strokeWidth="3.8"
                    stroke="#EAF0F2"
                    fill="none"
                    cx="18"
                    cy="18"
                    r="15.91549431"
                  />
                  <circle
                    className="text-green-600"
                    strokeWidth="3.8"
                    strokeDasharray={cn(evaluation, " ", "100")}
                    strokeLinecap="round"
                    stroke={
                      evaluation > 50
                        ? "#3CC28A"
                        : evaluation > 25
                        ? "#F9C94E"
                        : "#EB751F"
                    }
                    fill="none"
                    cx="18"
                    cy="18"
                    r="15.91549431"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-xs font-bold">
                  {parseInt((evaluation / 10).toString()) + `/10`}
                </div>
              </div>
              <div className="flex flex-col justify-start w-full items-start">
                <p className="text-xs text-[#98A1BB]">{criteriaName + " "+":"}</p>
                <p className="text-md text-start">{criteriaValue}</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="mx-4">
            <div className="flex flex-col gap-4">
              <p className="text-[#5B6170]">{summary}</p>
              <div className="flex flex-col justify-start w-full gap-2">
                <p className="text-xl font-bold">Strengths</p>
                <div className="border-2 rounded-2xl border-[#3CC28A]  bg-[#3CC28A] bg-opacity-[2%]">
                  {strengths.map((strength, index) => (
                    <div key={index} className="flex items-center gap-2 p-2">
                      <CircleCheck className="text-[#3CC28A]" />
                      <p className="text-[#3D404B]">{strength}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-start w-full gap-2">
                <p className="text-xl font-bold">Scope of improvements</p>
                <div className="border-2 rounded-2xl border-[#F9C94E]  bg-[#F9C94E] bg-opacity-[2%]">
                  {improvements.map((improvement, index) => (
                    <div key={index} className="flex items-center gap-2 p-2">
                      <CircleAlert className="text-[#F9C94E]" />
                      <p className="text-[#3D404B]">{improvement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default EvaluationCriteria;
