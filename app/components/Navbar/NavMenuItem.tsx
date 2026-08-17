import { ChevronDown } from "lucide-react";
import { NavItemType } from "./types";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SubMenu from "./SubMenu";


interface NavMenuItemProps {
  item: NavItemType;
  index: number;
  isOpenSub: boolean;
  toggleSubMenu: (index: number) => void;
  subMenuRefs: React.RefObject<HTMLDivElement[]>;
  closeMenu: () => void;
}

export default function NavMenuItem({
  item,
  index,
  toggleSubMenu,
  subMenuRefs,
  isOpenSub,
  closeMenu,
}: NavMenuItemProps) {
    const pathname = usePathname();
    
    return(
        <div  className={styles.navItemWrapper}>
    
        {/* MAIN ROW */}
        <div className={styles.navMainRow}>
    
        <Link
  href={item.href}
  onClick={closeMenu}
  className={`
    ${styles.navMainLink}
    ${pathname === item.href ? styles.activeLink : ""}
    ${styles.hoverLink}
  `}
>
    <span className={styles.text}>{item.label}</span>
    <span className={styles.textHover}>{item.label}</span>
    </Link>
    
          {item.altmenu && (
            <button
            className={`${styles.arrow} ${
              isOpenSub ? styles.arrowOpen : ""
              }`}
              onClick={() => toggleSubMenu(index)}
            >
               <ChevronDown/>
            </button>
          )}
        </div>
    
        {/* SUBMENU */}
        
       {item.altmenu && (
 <SubMenu
 items={item.altmenu}
 index={index}
 subMenuRefs={subMenuRefs}
 closeMenu={closeMenu}
/>
)}
      </div>
    )
  }