import { memo } from "react";

const Sidebar = () => {
  return (
    <>
      <div className="flex-col bg-white h-[100%]">
        <img src="/logo.png" />
      </div>
    </>
  );
};

export default memo(Sidebar);
