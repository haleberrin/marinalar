import gsap from "gsap";
import styles from "../Navbar.module.css";

export default function useAnimateLinks() {
    const animateLinksIn = () => {
        const mainLinks = gsap.utils.toArray(
          `.${styles.navMainLink}`
        );
    
        const subLinks = gsap.utils.toArray(
          `.${styles.navSubMenu} a`
        );
    
        gsap.fromTo(
          mainLinks,
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.06,
            ease: "power3.out",
          }
        );
        gsap.fromTo(
          subLinks,
          { y: 10, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.05,
            delay: 0.3,
            ease: "power2.out",
          }
        );
      };

      return animateLinksIn;
}