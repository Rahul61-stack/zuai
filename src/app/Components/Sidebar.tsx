import { memo } from "react"
import HamburgerMenu from "./HamburgerMenu"
import { cn } from "@/lib/utils"

const Sidebar = ({showMenu}:{showMenu:boolean}) =>{
    return <>
    <div className={cn("flex justify-between bg-white h-[100%] px-2",(!showMenu?'flex-col':''))}>
            <img src="/logo.png"/>
            <HamburgerMenu/>
    </div>
    </>
}

export default memo(Sidebar)