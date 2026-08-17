import {useEffect} from "react"

export default function useBodyScrollLock(isOpen: boolean){
    
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
      
        return () => {
          document.body.style.overflow = "";
        };
      }, [isOpen]);

}