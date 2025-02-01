import { Activity, ActivitySquare, Bell, History, Home, Info, LogOut, Plus } from 'lucide-react'
import React from 'react'
import { Sidebar, SidebarContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from './ui/sidebar'

const menu_items = [
  {
    title: "About",
    url: "/streaks/about",
    icon: Info
  },
  {
    title: "New Streak",
    url: "/streaks/new",
    icon: Plus
  },
  {
    title: "Active Streaks",
    url: "/streaks/active",
    icon: ActivitySquare
  },
  {
    title: "Past Streaks",
    url: "/streaks/past",
    icon: History
  },
  {
    title: "Streak Details",
    url: "/streaks/:id/details",
    icon: Activity
  },
  {
    title: "Notifcations",
    url: "/streaks/notifications",
    icon: Bell
  },
  {
    title: "Logout",
    url: "/",
    icon: LogOut
  },
]

export function AppSidebar() {
  return (
    <Sidebar variant='floating'>
      <SidebarContent>
        <SidebarMenu>
          {menu_items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}