import styles from "./Navbar.module.css";
import { navlinks } from "./navlinks";
import NavMenuItem from "./NavMenuItem";

interface NavMenuProps {
  navItemsRef: React.RefObject<HTMLDivElement | null>;
  openSubMenus: number[];
  toggleSubMenu: (index: number) => void;
  subMenuRefs: React.RefObject<HTMLDivElement[]>;
  closeMenu: () => void;
}

export default function NavMenu({
  navItemsRef,
  openSubMenus,
  toggleSubMenu,
  subMenuRefs,
  closeMenu,
}: NavMenuProps) {
   
    return(
        <div
        ref={navItemsRef}
        className={styles.navItems}
      >
       {navlinks.map((item, index) => (
   <NavMenuItem
   key={item.href}
   item={item}
   index={index}
   isOpenSub={openSubMenus.includes(index)}
   toggleSubMenu={toggleSubMenu}
   subMenuRefs={subMenuRefs}
   closeMenu={closeMenu}
 />
))}
      </div>
    )
  }