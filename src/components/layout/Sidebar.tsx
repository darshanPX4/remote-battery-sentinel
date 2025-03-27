
import React, { createContext, useContext, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  Activity, 
  BellRing, 
  FileBarChart, 
  Settings,
  ChevronLeft,
  Menu
} from 'lucide-react';

// Create context for sidebar state management
type SidebarContextType = {
  isOpen: boolean;
  toggle: () => void;
};

const SidebarContext = createContext<SidebarContextType>({
  isOpen: true,
  toggle: () => {},
});

export const useSidebar = () => useContext(SidebarContext);

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };
  
  return (
    <SidebarContext.Provider value={{ isOpen, toggle }}>
      <div className="min-h-screen">
        {children}
      </div>
    </SidebarContext.Provider>
  );
};

export const SidebarTrigger: React.FC = () => {
  const { toggle } = useSidebar();
  
  return (
    <Button variant="ghost" size="icon" onClick={toggle} className="lg:hidden">
      <Menu className="h-5 w-5" />
    </Button>
  );
};

type SidebarItemProps = {
  to: string;
  icon: React.ElementType;
  label: string;
};

const SidebarItem: React.FC<SidebarItemProps> = ({ to, icon: Icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <NavLink to={to} className="w-full">
      {({ isActive }) => (
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start gap-3 px-3 py-2 rounded-md transition-all duration-200",
            isActive ? 
              "bg-scope-light text-scope-orange font-medium" : 
              "text-gray-600 hover:bg-gray-100"
          )}
        >
          <Icon className={cn("h-5 w-5", isActive ? "text-scope-orange" : "text-gray-600")} />
          <span>{label}</span>
        </Button>
      )}
    </NavLink>
  );
};

const Sidebar: React.FC = () => {
  const { isOpen, toggle } = useSidebar();
  
  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 lg:hidden backdrop-blur-sm" 
          onClick={toggle}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 z-50 pt-16 transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0 lg:w-20"
        )}
      >
        <div className="p-4 h-full flex flex-col">
          <div className="mb-6 flex justify-end lg:justify-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggle}
              className="hidden lg:flex"
            >
              <ChevronLeft className={cn(
                "h-5 w-5 transition-transform duration-300",
                !isOpen && "rotate-180"
              )} />
            </Button>
          </div>
          
          <nav className="space-y-1.5 flex-1">
            <SidebarItem to="/" icon={LayoutDashboard} label="Dashboard" />
            <SidebarItem to="/realtime" icon={Activity} label="Real-Time View" />
            <SidebarItem to="/alerts" icon={BellRing} label="Alerts" />
            <SidebarItem to="/reports" icon={FileBarChart} label="Reports" />
            <SidebarItem to="/configuration" icon={Settings} label="Configuration" />
          </nav>
          
          <div className="mt-auto pt-4 border-t border-gray-200">
            <div className="flex items-center gap-3 px-3 py-2">
              <div className="h-8 w-8 rounded-full bg-scope-orange text-white flex items-center justify-center font-medium text-sm">
                AS
              </div>
              {isOpen && (
                <div className="flex flex-col">
                  <span className="text-sm font-medium">Admin User</span>
                  <span className="text-xs text-muted-foreground">admin@scope.com</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
