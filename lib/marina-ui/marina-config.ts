import {
    Anchor,
    Baby,
    Compass,
    Crown,
    Heart,
    House,
    Moon,
    PawPrint,
    Sailboat,
    ShieldCheck,
    Ship,
    Snowflake,
    Trees,
    UserRound,
    Users,
    Wind,
    Wrench,
  } from "lucide-react";

export const scoreConfig = {
    luxury: {
      label: "Lüks",
      icon: Crown,
    },
  
    family: {
      label: "Aile",
      icon: Users,
    },
  
    nightlife: {
      label: "Gece Hayatı",
      icon: Moon,
    },
  
    nature: {
      label: "Doğa",
      icon: Trees,
    },
  
    sailing: {
      label: "Yelken",
      icon: Sailboat,
    },
  
    technical: {
      label: "Teknik",
      icon: Wrench,
    },

    windProtection: {
      label: "Rüzgar Koruması",
      icon: Wind,
    },

    naturalBeauty: {
      label: "Doğal Güzellik",
      icon: Trees,
    },
  } as const;

  export const highlightConfig = [
    {
      key: "blueFlag",
      label: "Mavi Bayrak",
      icon: ShieldCheck,
    },
    {
      key: "petFriendly",
      label: "Evcil Hayvan Dostu",
      icon: PawPrint,
    },
    {
      key: "charterAvailable",
      label: "Charter Hizmeti",
      icon: Ship,
    },
    {
      key: "winterStorageAvailable",
      label: "Kışlama İmkanı",
      icon: Snowflake,
    },
    {
      key: "customsClearance",
      label: "Gümrük İşlemleri",
      icon: Anchor,
    },
  ] as const;

 export const recommendedConfig = [
    {
      key: "beginner",
      label: "Yeni Başlayanlar",
      icon: Compass,
    },
    {
      key: "family",
      label: "Aileler",
      icon: Baby,
    },
    {
      key: "couples",
      label: "Çiftler",
      icon: Heart,
    },
    {
      key: "longStay",
      label: "Uzun Konaklama",
      icon: House,
    },
    {
      key: "superyacht",
      label: "Süper Yat",
      icon: Sailboat,
    },
    {
      key: "liveaboard",
      label: "Teknede Yaşam",
      icon: UserRound,
    },
  ] as const;

  export const marinaTagConfig = {
    luxury: {
      label:"Premium & Luxury",
      description:"Üst segment hizmetler...",
      icon:Crown
    },
  
    nightlife:{
      label:"Gece Hayatı",
      description:"Restoranlar...",
      icon:Moon
    },
  
    sailing:{
      label:"Yelken",
      description:"Yelken rotaları...",
      icon:Sailboat
    },
  
  }