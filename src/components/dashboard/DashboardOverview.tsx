
import React from 'react';
import { Battery, PlugZap, AlertTriangle, ThermometerSun } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import StatusBadge from './StatusBadge';

interface OverviewCardProps {
  title: string;
  value: string | number;
  status: 'normal' | 'warning' | 'critical' | 'inactive';
  icon: React.ReactNode;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
}

const OverviewCard: React.FC<OverviewCardProps> = ({
  title,
  value,
  status,
  icon,
  change,
  changeType = 'neutral',
}) => {
  const changeColor = {
    positive: 'text-status-normal',
    negative: 'text-status-critical',
    neutral: 'text-muted-foreground',
  }[changeType];
  
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center justify-between py-4 px-6 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
          {icon}
        </div>
      </CardHeader>
      <CardContent className="py-2 px-6">
        <div className="flex flex-col gap-1">
          <p className="text-2xl font-semibold">{value}</p>
          <div className="flex items-center justify-between">
            <StatusBadge status={status} size="sm" />
            {change && (
              <span className={`text-xs ${changeColor}`}>{change}</span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const DashboardOverview: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <OverviewCard
        title="Battery Banks"
        value="8/9"
        status="warning"
        icon={<Battery className="h-5 w-5 text-gray-600" />}
        change="1 offline"
        changeType="negative"
      />
      <OverviewCard
        title="Chargers"
        value="4/4"
        status="normal"
        icon={<PlugZap className="h-5 w-5 text-gray-600" />}
        change="All online"
        changeType="positive"
      />
      <OverviewCard
        title="Active Alerts"
        value="3"
        status="warning"
        icon={<AlertTriangle className="h-5 w-5 text-gray-600" />}
        change="2 new today"
        changeType="negative"
      />
      <OverviewCard
        title="Avg. Temperature"
        value="27.5°C"
        status="normal"
        icon={<ThermometerSun className="h-5 w-5 text-gray-600" />}
        change="+0.5°C from yesterday"
        changeType="neutral"
      />
    </div>
  );
};

export default DashboardOverview;
