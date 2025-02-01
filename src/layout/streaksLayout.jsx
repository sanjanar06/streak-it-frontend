import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import React from 'react';

function StreaksLayout({ children }) {
  return (
    <SidebarProvider className="h-screen w-screen">
        <AppSidebar/>
        <main className="w-full">
          <SidebarTrigger className="justify-normal" />
          <div>
            {children}
          </div>
        </main>
    </SidebarProvider>
  );
}

export default StreaksLayout;