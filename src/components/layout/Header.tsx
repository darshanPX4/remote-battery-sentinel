
import React from 'react';
import { Bell, Settings, HelpCircle, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SidebarTrigger } from '@/components/layout/Sidebar';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b border-gray-200 fixed top-0 left-0 right-0 z-40 px-4">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/7de908c8-4940-4885-a682-321ece5115ca.png" 
              alt="SCOPE Logo" 
              className="h-10"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-status-critical animate-pulse"></span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="flex items-center justify-between px-4 py-2 border-b">
                <span className="font-medium">Notifications</span>
                <Button variant="ghost" size="sm">Mark all as read</Button>
              </div>
              <div className="max-h-[300px] overflow-y-auto">
                <div className="px-4 py-2 border-b hover:bg-muted/50 cursor-pointer">
                  <div className="flex items-start gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-status-critical mt-1.5 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium">High String Voltage Alert</p>
                      <p className="text-xs text-muted-foreground">Battery Bank 1 - 10 mins ago</p>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-2 border-b hover:bg-muted/50 cursor-pointer">
                  <div className="flex items-start gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-status-warning mt-1.5 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium">High Cell Temperature Warning</p>
                      <p className="text-xs text-muted-foreground">Battery Bank 2, Cell 4 - 30 mins ago</p>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-2 hover:bg-muted/50 cursor-pointer">
                  <div className="flex items-start gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-status-inactive mt-1.5 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium">Connection Restored</p>
                      <p className="text-xs text-muted-foreground">Battery Bank 3 - 1 hour ago</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2 text-center border-t">
                <Button variant="ghost" size="sm" className="w-full">View all notifications</Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <HelpCircle className="h-5 w-5" />
          </Button>
          
          <div className="h-8 w-8 rounded-full bg-scope-orange text-white flex items-center justify-center font-medium text-sm">
            AS
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
