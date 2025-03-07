"use client"

import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import MainMenu from "./MainMenu"
import Other from "./Other"



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="text-gray-700" collapsible="icon" {...props}>
      <SidebarHeader>
      <div className="h-[5em] w-full flex items-center justify-center ">
            <h1 className="lg:text-3xl md:text-base font-bold p-2 m-2">WeHR</h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <MainMenu></MainMenu>
        <Other></Other>
      </SidebarContent>
      <SidebarFooter>
        
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
