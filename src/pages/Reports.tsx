
import React from 'react';
import { 
  FileBarChart, Download, Calendar, Clock, 
  BarChart3, Filter, LineChart as LineChartIcon 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Select, SelectContent, SelectItem, 
  SelectTrigger, SelectValue 
} from '@/components/ui/select';
import LineChart from '@/components/charts/LineChart';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Sample data for charts
const generateDailyData = () => {
  const data = [];
  
  for (let i = 0; i < 24; i++) {
    const hour = i.toString().padStart(2, '0') + ':00';
    
    data.push({
      name: hour,
      voltage: 48 + Math.sin(i * 0.5) * 0.6 + (Math.random() * 0.2 - 0.1),
      current: 12 + Math.cos(i * 0.5) * 4 + (Math.random() * 1 - 0.5),
      temperature: 25 + Math.sin(i * 0.2) * 3 + (Math.random() * 0.5 - 0.25),
    });
  }
  
  return data;
};

const generateMonthlyData = () => {
  const data = [];
  const days = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
                '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
                '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
  
  for (let i = 0; i < days.length; i++) {
    const day = days[i];
    
    data.push({
      name: day,
      voltage: 48 + Math.sin(i * 0.2) * 0.8 + (Math.random() * 0.3 - 0.15),
      current: 12 + Math.cos(i * 0.2) * 3 + (Math.random() * 1.5 - 0.75),
      temperature: 25 + Math.sin(i * 0.1) * 4 + (Math.random() * 0.6 - 0.3),
    });
  }
  
  return data;
};

// Sample table data
const tableData = [
  { date: '2023-07-01', minVoltage: 47.2, maxVoltage: 48.5, avgVoltage: 47.8, minTemp: 23.1, maxTemp: 28.4, avgTemp: 25.7, alerts: 2 },
  { date: '2023-07-02', minVoltage: 47.5, maxVoltage: 48.3, avgVoltage: 47.9, minTemp: 23.5, maxTemp: 28.1, avgTemp: 25.9, alerts: 0 },
  { date: '2023-07-03', minVoltage: 47.1, maxVoltage: 48.7, avgVoltage: 47.6, minTemp: 23.0, maxTemp: 29.2, avgTemp: 26.3, alerts: 3 },
  { date: '2023-07-04', minVoltage: 47.3, maxVoltage: 48.2, avgVoltage: 47.7, minTemp: 23.2, maxTemp: 27.8, avgTemp: 25.4, alerts: 1 },
  { date: '2023-07-05', minVoltage: 47.4, maxVoltage: 48.4, avgVoltage: 47.9, minTemp: 23.6, maxTemp: 28.3, avgTemp: 25.8, alerts: 0 },
];

const Reports: React.FC = () => {
  const [reportType, setReportType] = React.useState('daily');
  const [selectedBank, setSelectedBank] = React.useState('bank1');
  const [dateRange, setDateRange] = React.useState('today');
  
  const chartData = reportType === 'daily' ? generateDailyData() : generateMonthlyData();
  const xAxisLabel = reportType === 'daily' ? 'Hour' : 'Day';
  
  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-1">Reports</h1>
        <p className="text-muted-foreground">Generate and view historical reports</p>
      </div>
      
      <div className="space-y-6">
        <Card>
          <CardHeader className="py-4 px-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <CardTitle className="flex items-center gap-2">
                <FileBarChart className="h-5 w-5 text-scope-orange" />
                <span>Battery Performance Reports</span>
              </CardTitle>
              
              <div className="flex flex-wrap items-center gap-2">
                <Select value={selectedBank} onValueChange={setSelectedBank}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Bank" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bank1">Battery Bank 1</SelectItem>
                    <SelectItem value="bank2">Battery Bank 2</SelectItem>
                    <SelectItem value="bank3">Battery Bank 3</SelectItem>
                    <SelectItem value="all">All Banks</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={dateRange} onValueChange={setDateRange}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Date Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="yesterday">Yesterday</SelectItem>
                    <SelectItem value="week">Last 7 Days</SelectItem>
                    <SelectItem value="month">Last 30 Days</SelectItem>
                    <SelectItem value="custom">Custom Range</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button variant="outline" size="icon" className="h-10 w-10">
                  <Calendar className="h-4 w-4" />
                </Button>
                
                <Button>
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="px-6 py-4">
            <Tabs defaultValue="daily" onValueChange={setReportType}>
              <div className="flex items-center justify-between mb-4">
                <TabsList>
                  <TabsTrigger value="daily" className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    Daily
                  </TabsTrigger>
                  <TabsTrigger value="monthly" className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Monthly
                  </TabsTrigger>
                </TabsList>
                
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <LineChartIcon className="h-4 w-4" />
                    Line
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    <BarChart3 className="h-4 w-4" />
                    Bar
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    <Filter className="h-4 w-4" />
                    Filter
                  </Button>
                </div>
              </div>
              
              <TabsContent value="daily">
                <div className="grid grid-cols-1 gap-6">
                  <LineChart 
                    title="Voltage Trend"
                    data={chartData}
                    lines={[
                      { id: 'voltage', name: 'Voltage', color: '#F26522' },
                    ]}
                    yAxisLabel="Voltage (V)"
                    xAxisLabel={xAxisLabel}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <LineChart 
                      title="Current Trend"
                      data={chartData}
                      lines={[
                        { id: 'current', name: 'Current', color: '#3B82F6' },
                      ]}
                      yAxisLabel="Current (A)"
                      xAxisLabel={xAxisLabel}
                    />
                    
                    <LineChart 
                      title="Temperature Trend"
                      data={chartData}
                      lines={[
                        { id: 'temperature', name: 'Temperature', color: '#10B981' },
                      ]}
                      yAxisLabel="Temperature (°C)"
                      xAxisLabel={xAxisLabel}
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="monthly">
                <div className="grid grid-cols-1 gap-6">
                  <LineChart 
                    title="Monthly Voltage Trend"
                    data={chartData}
                    lines={[
                      { id: 'voltage', name: 'Voltage', color: '#F26522' },
                    ]}
                    yAxisLabel="Voltage (V)"
                    xAxisLabel={xAxisLabel}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <LineChart 
                      title="Monthly Current Trend"
                      data={chartData}
                      lines={[
                        { id: 'current', name: 'Current', color: '#3B82F6' },
                      ]}
                      yAxisLabel="Current (A)"
                      xAxisLabel={xAxisLabel}
                    />
                    
                    <LineChart 
                      title="Monthly Temperature Trend"
                      data={chartData}
                      lines={[
                        { id: 'temperature', name: 'Temperature', color: '#10B981' },
                      ]}
                      yAxisLabel="Temperature (°C)"
                      xAxisLabel={xAxisLabel}
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-3">Summary Report</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Min Voltage</TableHead>
                    <TableHead className="text-right">Max Voltage</TableHead>
                    <TableHead className="text-right">Avg Voltage</TableHead>
                    <TableHead className="text-right">Min Temp</TableHead>
                    <TableHead className="text-right">Max Temp</TableHead>
                    <TableHead className="text-right">Avg Temp</TableHead>
                    <TableHead className="text-right">Alerts</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tableData.map((row) => (
                    <TableRow key={row.date}>
                      <TableCell className="font-medium">{row.date}</TableCell>
                      <TableCell className="text-right">{row.minVoltage}V</TableCell>
                      <TableCell className="text-right">{row.maxVoltage}V</TableCell>
                      <TableCell className="text-right">{row.avgVoltage}V</TableCell>
                      <TableCell className="text-right">{row.minTemp}°C</TableCell>
                      <TableCell className="text-right">{row.maxTemp}°C</TableCell>
                      <TableCell className="text-right">{row.avgTemp}°C</TableCell>
                      <TableCell className="text-right">{row.alerts}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;
