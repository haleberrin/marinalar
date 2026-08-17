import {useEffect, useState} from "react"

export default function useStickyNavbar(){
    const [isSticky, setIsSticky]=useState(false);

    useEffect(()=>{
        const handleScroll = ()=>{
            setIsSticky(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);

        return () =>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    return isSticky;
}