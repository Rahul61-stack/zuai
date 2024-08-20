import { memo } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

const Subject = () => {
  return <>
   <Select>
            <SelectTrigger className="w-[180px] rounded-3xl">
              <SelectValue placeholder="Subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cs">Computer Science</SelectItem>
              <SelectItem value="history">History</SelectItem>
              <SelectItem value="eco">Economics</SelectItem>
              <SelectItem value="bio">Biology</SelectItem>
              <SelectItem value="phy">Physics</SelectItem>
              <SelectItem value="chem">Chemistry</SelectItem>
            </SelectContent>
          </Select>
  </>;
};

export default memo(Subject);
