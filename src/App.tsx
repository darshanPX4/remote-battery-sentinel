
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Realtime from "./pages/Realtime";
import Alerts from "./pages/Alerts";
import Reports from "./pages/Reports";
import Configuration from "./pages/Configuration";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen w-full">
            <Header />
            <div className="flex h-[calc(100vh-4rem)] pt-16">
              <Sidebar />
              <main className="flex-1 w-full overflow-auto">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/realtime" element={<Realtime />} />
                  <Route path="/alerts" element={<Alerts />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/configuration" element={<Configuration />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
