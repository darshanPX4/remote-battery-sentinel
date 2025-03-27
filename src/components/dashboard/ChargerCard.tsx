
import React from 'react';
import { Zap, PlugZap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import StatusBadge from './StatusBadge';

interface ChargerCardProps {
  id: string;
  name: string;
  inputVoltage: number;
  outputVoltage: number;
  outputCurrent: number;
  powerFactor: number;
  status: 'normal' | 'warning' | 'critical' | 'inactive';
  lastUpdated: string;
}

const ChargerCard: React.FC<ChargerCardProps> = ({
  id,
  name,
  inputVoltage,
  outputVoltage,
  outputCurrent,
  powerFactor,
  status,
  lastUpdated,
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <CardHeader className="flex flex-row items-center justify-between bg-gray-50 py-3 px-4">
        <CardTitle className="text-base font-medium flex items-center gap-2">
          <PlugZap className="h-4 w-4" />
          {name}
        </CardTitle>
        <StatusBadge status={status} animate={status !== 'inactive'} />
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-xs text-muted-foreground">Input Voltage</p>
              <p className="text-lg font-medium">{inputVoltage} <span className="text-xs font-normal">VAC</span></p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Output Voltage</p>
              <p className="text-lg font-medium">{outputVoltage} <span className="text-xs font-normal">VDC</span></p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Output Current</p>
              <p className="text-lg font-medium">{outputCurrent} <span className="text-xs font-normal">A</span></p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Power Factor</p>
              <div className="flex items-center">
                <p className="text-lg font-medium mr-1">{powerFactor}</p>
                <Zap className="h-4 w-4 text-scope-orange" />
              </div>
            </div>
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

export default ChargerCard;
