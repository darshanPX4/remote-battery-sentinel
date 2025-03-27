
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import StatusBadge, { StatusType } from '@/components/dashboard/StatusBadge';
import BatteryProgressBar from '@/components/dashboard/BatteryProgressBar';

interface BatteryCardProps {
  id: string;
  name: string;
  voltage: number;
  current: number;
  temperature: number;
  chargeLevel: number;
  status: StatusType;
  lastUpdated: string;
}

const BatteryCardWrapper: React.FC<BatteryCardProps> = ({
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
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-medium text-base">{name}</h3>
            <p className="text-xs text-muted-foreground">{id}</p>
          </div>
          <StatusBadge status={status} animate={status === 'warning' || status === 'critical'} />
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm">Charge Level</span>
              <span className="font-medium">{chargeLevel}%</span>
            </div>
            <BatteryProgressBar value={chargeLevel} />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Voltage</p>
              <p className="font-medium">{voltage > 0 ? `${voltage.toFixed(1)}V` : '-'}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Current</p>
              <p className="font-medium">{current > 0 ? `${current.toFixed(1)}A` : '-'}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Temperature</p>
              <p className="font-medium">{temperature.toFixed(1)}°C</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Last Updated</p>
              <p className="font-medium">{lastUpdated}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BatteryCardWrapper;
