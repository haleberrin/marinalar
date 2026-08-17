import React, {  useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import styles from "../Navbar.module.css";

export default function useMenuAnimation(
    isAnimating: React.RefObject<boolean>,
    isOpen:boolean,
    setIsOpen:  React.Dispatch<React.SetStateAction<boolean>>,
    animateLinksIn:()=> void
){
    const navItemsRef = useRef<HTMLDivElement | null>(null);
    const navBgsRef = useRef<HTMLDivElement[]>([]);

    useLayoutEffect(() => {
      navBgsRef.current = gsap.utils.toArray(`.${styles.navBg}`);
    }, []);

    const toggleMenu = () => {
      
        if (isAnimating.current) return;
        isAnimating.current = true;
    
        const next = !isOpen;
        setIsOpen(next);
        const tl=gsap.timeline();
    
        if (next) {
          // OPEN BACKGROUNDS
          tl.to(navBgsRef.current, {
            scaleY: 1,
            transformOrigin: "top",
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.inOut",
          });
    
          // SHOW MENU
          tl.to(navItemsRef.current, {
            y: "0%",
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
            onComplete: () => {
              animateLinksIn();
              isAnimating.current = false;
            },
          });
        } else {
          // CLOSE BACKGROUNDS
          tl.to(navBgsRef.current, {
            scaleY: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power3.inOut",
          });
    
          // HIDE MENU
          tl.to(navItemsRef.current, {
            y: "-100%",
            opacity: 0,
            duration: 0.5,
            ease: "power3.in",
            onComplete: () => {
              isAnimating.current = false;
            },
          });
        }
      };

      return {
        toggleMenu,
        navItemsRef,
        navBgsRef,
      };
}