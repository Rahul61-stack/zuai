import { memo } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { BrowserView, MobileView } from "react-device-detect";

const Sidebar = () => {
  return (
    <>
      <MobileView>
        <div
          className={cn(
            "flex justify-between items-center align-middle gap-2 bg-white h-[100%] px-2 sm:flex-row md:flex-col"
          )}
        >
          <div className="flex sm:flex-row md:flex-col gap-2 items-center">
            <Image alt="logo" height={36} width={36} src="/logo.png" />
            <HamburgerMenu />
          </div>
        </div>
      </MobileView>
      <BrowserView>
        <div
          className={cn(
            "flex flex-col justify-start w-fit gap-2 bg-white px-2 "
          )}
        >
          <div className="flex sm:flex-row md:flex-col gap-2 items-center">
            <Image alt="logo" height={36} width={36} src="/logo.png" />
            <div className="flex sm:flex-row md:flex-col gap-4 items-center">
              <Image alt="logo" src="/logo2_left.png" width="36" height="36" />
              <Image alt="logo" src="/book_4_left.png" width="19" height="17" />
              <Image
                alt="logo"
                src="/file_copy_left.png"
                width="19"
                height="17"
              />
              <Image alt="logo" src="/quiz_left.png" width="19" height="17" />
            </div>
          </div>
        </div>
      </BrowserView>
    </>
  );
};

export default memo(Sidebar);
