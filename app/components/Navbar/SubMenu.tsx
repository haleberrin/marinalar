import { NavSubItem } from "./types";
import styles from "./Navbar.module.css";
import Link from "next/link";

interface SubMenuProps {
    subMenuRefs:React.RefObject<HTMLDivElement[]>;
    items: NavSubItem[];
    index:number;
    closeMenu: () => void;
}

export default function SubMenu({
    items,
    index,
    subMenuRefs,
    closeMenu
}:SubMenuProps){
    return (
        <div
          className={styles.navSubMenu}
         
          ref={(el) => {
              if (!el) return;
              subMenuRefs.current[index] = el;
            }}
        >
          {items.map((sub, j) => (
        
  <Link
  key={sub.href}
  href={sub.href}
  onClick={closeMenu}
  className={`${styles.navSubLink} ${styles.subHoverLink}`}
  >
  <span className={styles.subText}>{sub.label}</span>
  <span className={styles.subTextHover}>{sub.label}</span>
  </Link>
          ))}
        </div>
      )}
