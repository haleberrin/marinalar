import React, { useEffect } from "react";
import gsap from "gsap";

export default function useSubMenuAnimation(
    subMenuRefs : React.RefObject<HTMLDivElement[]>,
    openSubMenus : number[]
){
    useEffect(()=>{
        subMenuRefs.current.forEach((menu,i)=>{
            menu && gsap.to(menu, {
                height: openSubMenus.includes(i) ? "auto" : 0,
                opacity:openSubMenus.includes(i) ? 1 : 0,
                duration:.45,
                ease:"power3.inOut"
            })
        })
    }, [openSubMenus])
}