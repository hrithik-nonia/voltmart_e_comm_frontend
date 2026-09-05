import {
  Smartphone,
  Laptop,
  Headphones,
  Camera,
  Gamepad2,
  Keyboard,
} from "lucide-react";

export const Categories = [
  {
    title: "Phones",
    items: "128 items",
    description: "Flagship & Foldables",
    icon: Smartphone,
    badgeStyle: "bg-blue-950/80 border-blue-800/60 text-blue-400",
  },
  {
    title: "Laptops",
    items: "64 items",
    description: "Creator & Esports",
    icon: Laptop,
    badgeStyle: "bg-cyan-950/80 border-cyan-800/60 text-cyan-400",
  },
  {
    title: "Audio",
    items: "92 items",
    description: "Spatial & Planar",
    icon: Headphones,
    badgeStyle: "bg-indigo-950/80 border-indigo-800/60 text-indigo-400",
  },
  {
    title: "Cameras",
    items: "45 items",
    description: "8K Cinema & Logs",
    icon: Camera,
    badgeStyle: "bg-amber-950/80 border-amber-800/60 text-amber-500",
  },
  {
    title: "Gaming",
    items: "110 items",
    description: "Consoles & Decks",
    icon: Gamepad2,
    badgeStyle: "bg-rose-950/80 border-rose-800/60 text-rose-500",
  },
  {
    title: "Accessories",
    items: "230 items",
    description: "Keyboards & Docks",
    icon: Keyboard,
    badgeStyle: "bg-sky-950/80 border-sky-800/60 text-sky-400",
  },
];
