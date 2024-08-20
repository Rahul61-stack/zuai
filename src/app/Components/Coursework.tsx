import { memo } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Coursework = () => {
  return (
    <>
      <Select>
        <SelectTrigger className="w-[180px] rounded-3xl">
          <SelectValue placeholder="Coursework Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Coursework Type</SelectLabel>
            <SelectItem value="ias">Internal Assessments (IAs)</SelectItem>
            <SelectItem value="ee">Extended Essay (EE)</SelectItem>
            <SelectItem value="tok">Theory of Knowledge (TOK)</SelectItem>
            <SelectItem value="cas">Creativity, Activity, Service (CAS)</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default memo(Coursework);
