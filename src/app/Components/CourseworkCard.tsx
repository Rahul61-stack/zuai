import Image from "next/image"
import { memo } from "react"
import { subjectKeyMap } from "../Constants/constants"

const CoursworkCard = ({data,index}:{data:any,index:number}) =>{
    return <div
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
          {subjectKeyMap[`${data.subject}`]}
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
}
export default memo(CoursworkCard)