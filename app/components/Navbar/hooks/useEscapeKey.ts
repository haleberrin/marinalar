import { useEffect } from "react";


export default function useEscapeKey(
    isOpen:boolean,
    toggleMenu: ()=> void
){
    useEffect(() => {

        const handleKey=(e:KeyboardEvent)=>{
           if(e.key==="Escape" && isOpen){
               toggleMenu();
           }
        }
      
        window.addEventListener("keydown",handleKey)
      
        return ()=>{
            window.removeEventListener("keydown",handleKey)
        }
      
      },[isOpen, toggleMenu])

      
}