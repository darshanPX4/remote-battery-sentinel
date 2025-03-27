
import React from 'react';
import { Battery, ThermometerSun } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import StatusBadge from './StatusBadge';

interface BatteryCardProps {
  id: string;
  name: string;
  voltage: number;
  current: number;
  temperature: number;
  chargeLevel: number;
  status: 'normal' | 'warning' | 'critical' | 'inactive';
  lastUpdated: string;
}

const BatteryCard: React.FC<BatteryCardProps> = ({
  id,
  name,
  voltage,
  current,
  temperature,
  chargeLevel,
  status,
  lastUpdated,
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <CardHeader className="flex flex-row items-center justify-between bg-gray-50 py-3 px-4">
        <CardTitle className="text-base font-medium flex items-center gap-2">
          <Battery className="h-4 w-4" />
          {name}
        </CardTitle>
        <StatusBadge status={status} animate={status !== 'inactive'} />
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-xs text-muted-foreground">Voltage</p>
              <p className="text-lg font-medium">{voltage} <span className="text-xs font-normal">V</span></p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Current</p>
              <p className="text-lg font-medium">{current} <span className="text-xs font-normal">A</span></p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Temperature</p>
              <div className="flex items-center">
                <p className="text-lg font-medium mr-1">{temperature}°C</p>
                <ThermometerSun className="h-4 w-4 text-scope-orange" />
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">ID</p>
              <p className="text-sm font-mono">{id}</p>
            </div>
          </div>
          
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground">State of Charge</p>
              <p className="text-xs font-medium">{chargeLevel}%</p>
            </div>
            <Progress 
              value={chargeLevel} 
              className="h-2"
              indicatorClassName={
                chargeLevel > 60 ? "bg-status-normal" :
                chargeLevel > 20 ? "bg-status-warning" :
                "bg-status-critical"
              }
            />
          </div>
          
          <div className="flex justify-between items-end pt-2">
            <p className="text-[10px] text-muted-foreground">Last updated: {lastUpdated}</p>
            <button className="text-xs text-scope-orange hover:text-scope-dark font-medium transition-colors">
              Details
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BatteryCard;
