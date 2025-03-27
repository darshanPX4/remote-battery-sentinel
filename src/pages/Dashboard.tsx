
import React from 'react';
import DashboardOverview from '@/components/dashboard/DashboardOverview';
import BatteryCard from '@/components/dashboard/BatteryCard';
import ChargerCard from '@/components/dashboard/ChargerCard';
import AlertsPanel from '@/components/alerts/AlertsPanel';
import LineChart from '@/components/charts/LineChart';

// Define the status type to match the expected type in components
type StatusType = 'normal' | 'warning' | 'critical' | 'inactive';
type AlertSeverity = 'warning' | 'critical' | 'info';

// Sample data with correct typing
const batteries = [
  {
    id: 'BAT-001',
    name: 'Battery Bank 1',
    voltage: 48.2,
    current: 12.5,
    temperature: 25.3,
    chargeLevel: 78,
    status: 'normal' as StatusType,
    lastUpdated: '2 mins ago',
  },
  {
    id: 'BAT-002',
    name: 'Battery Bank 2',
    voltage: 47.9,
    current: 10.8,
    temperature: 27.1,
    chargeLevel: 65,
    status: 'normal' as StatusType,
    lastUpdated: '5 mins ago',
  },
  {
    id: 'BAT-003',
    name: 'Battery Bank 3',
    voltage: 46.4,
    current: 15.2,
    temperature: 29.8,
    chargeLevel: 42,
    status: 'warning' as StatusType,
    lastUpdated: '1 min ago',
  },
  {
    id: 'BAT-004',
    name: 'Battery Bank 4',
    voltage: 0,
    current: 0,
    temperature: 24.5,
    chargeLevel: 0,
    status: 'inactive' as StatusType,
    lastUpdated: '30 mins ago',
  },
];

const chargers = [
  {
    id: 'CHG-001',
    name: 'Charger 1',
    inputVoltage: 220,
    outputVoltage: 48.5,
    outputCurrent: 25.2,
    powerFactor: 0.95,
    status: 'normal' as StatusType,
    lastUpdated: '3 mins ago',
  },
  {
    id: 'CHG-002',
    name: 'Charger 2',
    inputVoltage: 218,
    outputVoltage: 48.3,
    outputCurrent: 18.7,
    powerFactor: 0.93,
    status: 'normal' as StatusType,
    lastUpdated: '7 mins ago',
  },
];

const alerts = [
  {
    id: 'ALT-001',
    title: 'High String Voltage Alert',
    description: 'Battery Bank 1 voltage exceeded the threshold of 49V. Current value: 49.2V.',
    timestamp: '10 mins ago',
    severity: 'critical' as AlertSeverity,
    source: 'Battery Bank 1',
    acknowledged: false,
  },
  {
    id: 'ALT-002',
    title: 'High Cell Temperature Warning',
    description: 'Cell 4 in Battery Bank 2 temperature is approaching critical level (28.5°C).',
    timestamp: '30 mins ago',
    severity: 'warning' as AlertSeverity,
    source: 'Battery Bank 2',
    acknowledged: false,
  },
  {
    id: 'ALT-003',
    title: 'Connection Restored',
    description: 'Connection to Battery Bank 3 has been restored after 5 minutes of downtime.',
    timestamp: '1 hour ago',
    severity: 'info' as AlertSeverity,
    source: 'System',
    acknowledged: true,
  },
];

const voltageData = [
  { name: '00:00', bank1: 48.1, bank2: 47.8, bank3: 46.5 },
  { name: '04:00', bank1: 48.2, bank2: 48.0, bank3: 46.3 },
  { name: '08:00', bank1: 48.3, bank2: 47.9, bank3: 46.4 },
  { name: '12:00', bank1: 48.1, bank2: 47.7, bank3: 46.2 },
  { name: '16:00', bank1: 48.0, bank2: 47.6, bank3: 46.0 },
  { name: '20:00', bank1: 48.2, bank2: 47.9, bank3: 46.4 },
  { name: '24:00', bank1: 48.2, bank2: 47.9, bank3: 46.4 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-1">Dashboard</h1>
        <p className="text-muted-foreground">Monitor your battery systems and chargers</p>
      </div>
      
      <div className="space-y-6">
        <DashboardOverview />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <LineChart 
              title="Battery Voltage Trend (24h)"
              data={voltageData}
              lines={[
                { id: 'bank1', name: 'Battery Bank 1', color: '#10B981' },
                { id: 'bank2', name: 'Battery Bank 2', color: '#3B82F6' },
                { id: 'bank3', name: 'Battery Bank 3', color: '#F26522' },
              ]}
              yAxisLabel="Voltage (V)"
              xAxisLabel="Time"
            />
          </div>
          <div className="lg:col-span-1">
            <AlertsPanel alerts={alerts} className="h-full" />
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-medium mb-4">Battery Banks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {batteries.map((battery) => (
              <BatteryCard key={battery.id} {...battery} />
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-medium mb-4">Chargers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {chargers.map((charger) => (
              <ChargerCard key={charger.id} {...charger} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
