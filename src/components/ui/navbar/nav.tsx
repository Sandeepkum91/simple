"use client"

import * as React from "react"
import { Home, Star, Code,  Info, ShowerHeadIcon } from "lucide-react"
import { AnimeNavBar } from "./anime-navbar"



const items = [
  { name: "Home", url: "#home", icon: Home },
  { name: "About", url: "#about", icon: Info },
  { name: "Experience", url: "#experience", icon: ShowerHeadIcon },
  { name: "Skills", url: "#skills", icon: Star },
  { name: "Projects", url: "#projects", icon: Code }
]

export  function AnimeNavBarDemo() {
  return <AnimeNavBar items={items} defaultActive="Home" />
}
