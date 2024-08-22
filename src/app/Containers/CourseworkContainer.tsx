"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Document, Page, pdfjs } from "react-pdf";
import { useState, memo, useMemo } from "react";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { BrowserView, MobileView } from "react-device-detect";
import { cn } from "@/lib/utils";
pdfjs.GlobalWorkerOptions.workerSrc =
  "//unpkg.com/pdfjs-dist@4.4.168/build/pdf.worker.min.mjs";

const CourseworkContainer = () => {
  const [viewAll, setViewAll] = useState(false);
  const essayData = useMemo(() => {
    if(localStorage){
      return JSON.parse(localStorage.getItem("essays") || "[]");
    }
    else return []
  },[])
  const types = [
    { value: "ias", label: "IAs" },
    { value: "ee", label: "EE" },
    { value: "tok", label: "TOK" },
    { value: "cas", label: "CAS" },
  ];
  const [selectedType, setSelectedType] = useState("all");
  const essayDataToShow = useMemo(() => {
    if (!viewAll) return essayData.splice(0, 2);
    if (selectedType === "all") return essayData;
    else
      return essayData.filter((data: any) => data.courseType === selectedType);
  }, [selectedType, viewAll]);

  return (
    <div className="flex flex-col justify-center items-center gap-2 pt-8 w-full">
      <p className="text-xl font-semibold">My coursework</p>
      {viewAll ? (
        <div className="flex gap-3">
          <div
            onClick={() => setSelectedType("all")}
            className={cn(
              selectedType === "all"
                ? "bg-white text-zuai-purple-100"
                : "text-[#7A8196]",
              " text-[16px] font-medium p-3 rounded-xl"
            )}
            key="all"
          >
            All
          </div>
          {types.map((type) => (
            <div
              onClick={() => setSelectedType(type.value)}
              className={cn(
                selectedType === type.value
                  ? "bg-white text-zuai-purple-100"
                  : "bg-zuai-slate-100 text-[#7A8196]",
                " text-[16px] font-medium p-3 rounded-xl"
              )}
              key={type.value}
            >
              {type.label}
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
      <div className="md:grid md:grid-cols-2 md:justify-center md:gap-4">
        {essayDataToShow.map((data: any, index: number) => (
          <div key={index}>
            <MobileView>
              <div
                key={index}
                className="bg-[#D8E3F4] bg-opacity-30 w-[336px] border-2 border-[#D8E3F4] flex flex-col gap-3 justify-start items-start p-3 rounded-xl"
              >
                <p className="text-lg font-semibold">{data.name}</p>
                <p className="text-[#7A8196] text-[11px] font-medium">
                  Description
                </p>
                <div className="flex gap-1 flex-wrap">
                  <div className="flex bg-white rounded-3xl">
                    <Image
                      alt="logo"
                      src="/avatar.png"
                      width="13"
                      height="16"
                    />
                    <p className="text-[11px] pt-0.5 pr-2 pb-0.5 pl-0.5">
                      {data.subject}
                    </p>
                  </div>
                  <div className="flex bg-white rounded-3xl">
                    <Image alt="logo" src="/time.png" width="13" height="16" />
                    <p className="text-[11px] pt-0.5 pr-2 pb-0.5 pl-0.5">
                      10 min read
                    </p>
                  </div>
                  <div className="flex bg-white rounded-3xl">
                    <Image alt="logo" src="/icon.png" width="13" height="16" />
                    <p className="text-[11px] pt-0.5 pr-2 pb-0.5 pl-0.5">
                      2000 words
                    </p>
                  </div>
                  <div className="flex bg-white rounded-3xl">
                    <Image alt="logo" src="/star.png" width="13" height="16" />
                    <p className="text-[11px] pt-0.5 pr-2 pb-0.5 pl-0.5">
                      {"8/10"}
                    </p>
                  </div>
                  <div className="flex bg-white rounded-3xl">
                    <Image
                      alt="logo"
                      src="/pencil.png"
                      width="13"
                      height="16"
                    />
                    <p className="text-[11px] pt-0.5 pr-2 pb-0.5 pl-0.5">
                      {"English"}
                    </p>
                  </div>
                </div>
              </div>
            </MobileView>
            <BrowserView>
              <div className="flex flex-row gap-2 bg-[#D8E3F4]  w-[440px] bg-opacity-30 border-[#D8E3F4] border-2 rounded-xl p-3">
                <Document
                  file={data.content}
                  onLoadError={(error) =>
                    console.error("Error loading PDF:", error)
                  }
                  options={{
                    cMapUrl: "/cmaps/",
                    standardFontDataUrl: "/standard_fonts/",
                  }}
                >
                  <Page
                    className="h-[160px] overflow-hidden"
                    height={160}
                    width={120}
                    scale={1}
                    renderTextLayer={false}
                    pageNumber={1}
                  />
                </Document>
                <div
                  key={index}
                  className=" flex flex-col gap-2 justify-start items-start  "
                >
                  <p className="text-lg font-semibold">{data.name}</p>
                  <p className="text-[#7A8196] text-[11px] font-medium">
                    Description
                  </p>
                  <div className="flex gap-1 flex-wrap">
                    <div className="flex bg-white rounded-3xl">
                      <Image
                        alt="logo"
                        src="/avatar.png"
                        width="13"
                        height="16"
                      />
                      <p className="text-[11px] pt-0.5 pr-2 pb-0.5 pl-0.5">
                        {data.subject}
                      </p>
                    </div>
                    <div className="flex bg-white rounded-3xl">
                      <Image
                        alt="logo"
                        src="/time.png"
                        width="13"
                        height="16"
                      />
                      <p className="text-[11px] pt-0.5 pr-2 pb-0.5 pl-0.5">
                        10 min read
                      </p>
                    </div>
                    <div className="flex bg-white rounded-3xl">
                      <Image
                        alt="logo"
                        src="/icon.png"
                        width="13"
                        height="16"
                      />
                      <p className="text-[11px] pt-0.5 pr-2 pb-0.5 pl-0.5">
                        2000 words
                      </p>
                    </div>
                    <div className="flex bg-white rounded-3xl">
                      <Image
                        alt="logo"
                        src="/star.png"
                        width="13"
                        height="16"
                      />
                      <p className="text-[11px] pt-0.5 pr-2 pb-0.5 pl-0.5">
                        {"8/10"}
                      </p>
                    </div>
                    <div className="flex bg-white rounded-3xl">
                      <Image
                        alt="logo"
                        src="/pencil.png"
                        width="13"
                        height="16"
                      />
                      <p className="text-[11px] pt-0.5 pr-2 pb-0.5 pl-0.5">
                        {"English"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </BrowserView>
          </div>
        ))}
      </div>
      <div onClick={() => setViewAll((prev) => !prev)}>
        <p className="text-center text-[#98A1BB] text-lg cursor-pointer py-4">View all</p>
      </div>
    </div>
  );
};
export default memo(CourseworkContainer);
