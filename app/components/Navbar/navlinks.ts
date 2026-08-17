import { NavItemType } from "./types";

export const navlinks:NavItemType[] = [
    { href: "/", label: "Anasayfa" },
    { href: "/blogs", label: "Blog" },
    {
      href: "/marinas",
      label: "Marinalar",
      altmenu: [
        {
          href: "/marinas/region/ege",
          label: "Ege Marinaları",
        },
        {
          href: "/marinas/region/akdeniz",
          label: "Akdeniz Marinaları",
        },
        {
          href: "/marinas/region/marmara",
          label: "Marmara Marinaları",
        },
      ],
    },
    { href: "/ai-planer", label: "AI Planer" },
    {
      href: "/services",
      label: "Servisler",
      altmenu: [
        { href: "/weather", label: "Hava Durumu" },
        { href: "/live-marine", label: "Canlı Deniz Trafiği" },
        { href: "/glossary", label: "Denizcilik Sözlüğü" },
      ],
    },
  ];