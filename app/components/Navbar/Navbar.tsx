"use client";

import { useRef, useState } from "react";
import styles from "./Navbar.module.css";
import Logo from "./Logo";

import NavMenu from "./NavMenu";
import useStickyNavbar from "./hooks/useStickyNavbar";
import useBodyScrollLock from "./hooks/useBodyScrollLock";
import useEscapeKey from "./hooks/useEscapeKey";
import useSubMenuAnimation from "./hooks/useSubMenuAnimation";
import useMenuAnimation from "./hooks/useMenuAnimation";
import useAnimateLinks from "./hooks/useAnimateLinks";
import useSubMenu from "./hooks/useSubMenu";
import NavBackgrounds from "./NavBackgrounds";

export default function Navbar() {
  const isAnimating = useRef(false);

  const [isOpen, setIsOpen] = useState(false);

  const isSticky = useStickyNavbar();
  const { openSubMenus, toggleSubMenu } = useSubMenu();

  const subMenuRefs = useRef<HTMLDivElement[]>([]);

useBodyScrollLock(isOpen);
useSubMenuAnimation(subMenuRefs, openSubMenus);

const animateLinksIn = useAnimateLinks();
const {
  toggleMenu, 
  navItemsRef, 
  navBgsRef} = useMenuAnimation(isAnimating, isOpen, setIsOpen,  animateLinksIn);

useEscapeKey(isOpen, toggleMenu);

const closeMenu = () => {
  setIsOpen(false);
};


  // BACKGROUND COLLECT
  return (
    <div>
      {/* NAVBAR */}
      <nav className={`${styles.nav} ${
    isSticky ? styles.sticky : styles.transparent
  }`}>
        <div className={styles.navLogo}>
          <Logo />
        </div>

        <button
          className={`${styles.navToggler} ${
            isOpen ? styles.open : ""
          }`}
          onClick={toggleMenu}
          aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
  aria-expanded={isOpen}
  aria-controls="mobile-menu"
        >
          <span />
          <span />
        </button>
      </nav>

      {/* MENU */}
      <div
  className={`${styles.navContent} ${
    isOpen ? styles.active : styles.hidden
  }`} id="mobile-menu"
>
        {/* BACKGROUNDS */}
       
        <NavBackgrounds />

        {/* MENU ITEMS */}
      
        <NavMenu
  navItemsRef={navItemsRef}
  openSubMenus={openSubMenus}
  toggleSubMenu={toggleSubMenu}
  subMenuRefs={subMenuRefs}
  closeMenu={closeMenu}
/>
      </div>
    </div>
  );
}