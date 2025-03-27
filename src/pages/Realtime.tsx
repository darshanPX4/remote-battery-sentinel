
import React from 'react';
import { Battery, ThermometerSun, Zap, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StatusBadge from '@/components/dashboard/StatusBadge';
import LineChart from '@/components/charts/LineChart';

interface CellData {
  id: string;
  voltage: number;
  temperature: number;
  status: 'normal' | 'warning' | 'critical' | 'inactive';
}

interface BatteryBankData {
  id: string;
  name: string;
  cells: CellData[];
  voltage: number;
  current: number;
  temperature: number;
  status: 'normal' | 'warning' | 'critical' | 'inactive';
}

// Sample data
const batteryBanks: BatteryBankData[] = [
  {
    id: 'BAT-001',
    name: 'Battery Bank 1',
    voltage: 48.2,
    current: 12.5,
    temperature: 25.3,
    status: 'normal',
    cells: Array(24).fill(null).map((_, i) => ({
      id: `CELL-${i + 1}`,
      voltage: 2.0 + Math.random() * 0.05,
      temperature: 24 + Math.random() * 2,
      status: Math.random() > 0.9 ? 'warning' : 'normal',
    })),
  },
  {
    id: 'BAT-002',
    name: 'Battery Bank 2',
    voltage: 47.9,
    current: 10.8,
    temperature: 27.1,
    status: 'normal',
    cells: Array(24).fill(null).map((_, i) => ({
      id: `CELL-${i + 1}`,
      voltage: 2.0 + Math.random() * 0.05,
      temperature: 26 + Math.random() * 2,
      status: Math.random() > 0.95 ? 'warning' : 'normal',
    })),
  },
  {
    id: 'BAT-003',
    name: 'Battery Bank 3',
    voltage: 46.4,
    current: 15.2,
    temperature: 29.8,
    status: 'warning',
    cells: Array(24).fill(null).map((_, i) => ({
      id: `CELL-${i + 1}`,
      voltage: 1.9 + Math.random() * 0.15,
      temperature: 28 + Math.random() * 3,
      status: Math.random() > 0.8 ? 'warning' : 'normal',
    })),
  },
];

// Sample real-time data for charts
const generateTimePoints = () => {
  const now = new Date();
  const data = [];
  
  for (let i = 30; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 60000);
    const formattedTime = `${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}`;
    
    data.push({
      name: formattedTime,
      voltage: 48 + Math.sin(i * 0.1) * 0.3 + (Math.random() * 0.1 - 0.05),
      current: 12 + Math.cos(i * 0.1) * 3 + (Math.random() * 0.5 - 0.25),
      temperature: 26 + Math.sin(i * 0.05) * 1 + (Math.random() * 0.2 - 0.1),
    });
  }
  
  return data;
};

const realtimeData = generateTimePoints();

const Realtime: React.FC = () => {
  const [selectedBank, setSelectedBank] = React.useState(batteryBanks[0].id);
  
  const currentBank = batteryBanks.find(bank => bank.id === selectedBank) || batteryBanks[0];
  
  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-1">Real-Time Monitoring</h1>
        <p className="text-muted-foreground">View live data from battery banks and cells</p>
      </div>
      
      <div className="space-y-6">
        <div className="flex items-center justify-between gap-4 overflow-x-auto pb-2">
          <Tabs defaultValue={selectedBank} onValueChange={setSelectedBank} className="w-full">
            <TabsList className="mb-4">
              {batteryBanks.map((bank) => (
                <TabsTrigger key={bank.id} value={bank.id} className="flex items-center gap-2">
                  <Battery className="h-4 w-4" />
                  {bank.name}
                  <StatusBadge status={bank.status} size="sm" />
                </TabsTrigger>
              ))}
            </TabsList>
            
            {batteryBanks.map((bank) => (
              <TabsContent key={bank.id} value={bank.id} className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="py-4 px-6">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base font-medium">String Parameters</CardTitle>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>Live</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="px-6 py-4">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Zap className="h-4 w-4 text-scope-orange" />
                            <span className="text-sm font-medium">Voltage</span>
                          </div>
                          <p className="text-2xl font-semibold">{bank.voltage} <span className="text-sm font-normal">V</span></p>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Zap className="h-4 w-4 text-scope-orange" />
                            <span className="text-sm font-medium">Current</span>
                          </div>
                          <p className="text-2xl font-semibold">{bank.current} <span className="text-sm font-normal">A</span></p>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <ThermometerSun className="h-4 w-4 text-scope-orange" />
                            <span className="text-sm font-medium">Temperature</span>
                          </div>
                          <p className="text-2xl font-semibold">{bank.temperature} <span className="text-sm font-normal">°C</span></p>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Battery className="h-4 w-4 text-scope-orange" />
                            <span className="text-sm font-medium">Status</span>
                          </div>
                          <StatusBadge status={bank.status} size="lg" className="mt-1" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="lg:col-span-2">
                    <CardHeader className="py-4 px-6">
                      <CardTitle className="text-base font-medium">Real-Time Data</CardTitle>
                    </CardHeader>
                    <CardContent className="px-0 pt-0 pb-4">
                      <Tabs defaultValue="voltage">
                        <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                          <TabsTrigger
                            value="voltage"
                            className="rounded-none border-b-2 border-transparent bg-transparent px-4 py-2 font-medium text-muted-foreground hover:text-foreground data-[state=active]:border-scope-orange data-[state=active]:text-foreground data-[state=active]:shadow-none"
                          >
                            Voltage
                          </TabsTrigger>
                          <TabsTrigger
                            value="current"
                            className="rounded-none border-b-2 border-transparent bg-transparent px-4 py-2 font-medium text-muted-foreground hover:text-foreground data-[state=active]:border-scope-orange data-[state=active]:text-foreground data-[state=active]:shadow-none"
                          >
                            Current
                          </TabsTrigger>
                          <TabsTrigger
                            value="temperature"
                            className="rounded-none border-b-2 border-transparent bg-transparent px-4 py-2 font-medium text-muted-foreground hover:text-foreground data-[state=active]:border-scope-orange data-[state=active]:text-foreground data-[state=active]:shadow-none"
                          >
                            Temperature
                          </TabsTrigger>
                        </TabsList>
                        <TabsContent value="voltage" className="pt-4">
                          <LineChart 
                            title=""
                            data={realtimeData}
                            lines={[
                              { id: 'voltage', name: 'Voltage', color: '#F26522' },
                            ]}
                            yAxisLabel="Voltage (V)"
                            xAxisLabel="Time"
                            className="border-0 shadow-none"
                          />
                        </TabsContent>
                        <TabsContent value="current" className="pt-4">
                          <LineChart 
                            title=""
                            data={realtimeData}
                            lines={[
                              { id: 'current', name: 'Current', color: '#3B82F6' },
                            ]}
                            yAxisLabel="Current (A)"
                            xAxisLabel="Time"
                            className="border-0 shadow-none"
                          />
                        </TabsContent>
                        <TabsContent value="temperature" className="pt-4">
                          <LineChart 
                            title=""
                            data={realtimeData}
                            lines={[
                              { id: 'temperature', name: 'Temperature', color: '#10B981' },
                            ]}
                            yAxisLabel="Temperature (°C)"
                            xAxisLabel="Time"
                            className="border-0 shadow-none"
                          />
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                </div>
                
                <Card>
                  <CardHeader className="py-4 px-6">
                    <CardTitle className="text-base font-medium">Cell Parameters</CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 py-4 overflow-x-auto">
                    <Tabs defaultValue="voltage">
                      <TabsList>
                        <TabsTrigger value="voltage">Voltage</TabsTrigger>
                        <TabsTrigger value="temperature">Temperature</TabsTrigger>
                      </TabsList>
                      <TabsContent value="voltage" className="pt-4">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                          {currentBank.cells.map((cell, index) => (
                            <div 
                              key={cell.id} 
                              className="p-3 border rounded-md flex flex-col items-center hover:shadow-md transition-shadow"
                            >
                              <p className="text-xs text-muted-foreground mb-1">Cell {index + 1}</p>
                              <p className={`text-lg font-medium ${
                                cell.voltage < 1.95 ? "text-status-critical" :
                                cell.voltage < 2.0 ? "text-status-warning" :
                                "text-foreground"
                              }`}>
                                {cell.voltage.toFixed(2)} <span className="text-xs font-normal">V</span>
                              </p>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                      <TabsContent value="temperature" className="pt-4">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                          {currentBank.cells.map((cell, index) => (
                            <div 
                              key={cell.id} 
                              className="p-3 border rounded-md flex flex-col items-center hover:shadow-md transition-shadow"
                            >
                              <p className="text-xs text-muted-foreground mb-1">Cell {index + 1}</p>
                              <p className={`text-lg font-medium ${
                                cell.temperature > 30 ? "text-status-critical" :
                                cell.temperature > 28 ? "text-status-warning" :
                                "text-foreground"
                              }`}>
                                {cell.temperature.toFixed(1)} <span className="text-xs font-normal">°C</span>
                              </p>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Realtime;
