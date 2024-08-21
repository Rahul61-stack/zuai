'use client'

import { memo } from "react"

const CourseworkContainer = () =>{
    const essayData = JSON.parse(localStorage.getItem("essays") || "[]");

    return <div>
        <div className="">

        <p className="text-xl font-semibold">My coursework</p>
        </div>
    </div>
}
export default memo(CourseworkContainer)
