import { useState } from "react";

export default function useSubMenu(){
    const [openSubMenus, setOpenSubMenus] = useState<number[]>([]);
    const toggleSubMenu = (index: number) => {
        setOpenSubMenus((prev) => {
          if (prev.includes(index)) {
            return prev.filter((i) => i !== index);
          }
          return [...prev, index];
        });
      };
      return {
        openSubMenus,
        toggleSubMenu,
      };
}