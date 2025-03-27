
import React from 'react';
import { AlertTriangle, AlertCircle, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Alert {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  severity: 'critical' | 'warning' | 'info';
  source: string;
  acknowledged: boolean;
}

interface AlertsPanelProps {
  alerts: Alert[];
  className?: string;
}

const getSeverityIcon = (severity: Alert['severity']) => {
  switch (severity) {
    case 'critical':
      return <AlertCircle className="h-4 w-4 text-status-critical" />;
    case 'warning':
      return <AlertTriangle className="h-4 w-4 text-status-warning" />;
    case 'info':
      return <Info className="h-4 w-4 text-status-normal" />;
  }
};

const getSeverityBadge = (severity: Alert['severity']) => {
  switch (severity) {
    case 'critical':
      return (
        <Badge variant="destructive" className="rounded-sm">Critical</Badge>
      );
    case 'warning':
      return (
        <Badge variant="outline" className="text-status-warning border-status-warning rounded-sm">
          Warning
        </Badge>
      );
    case 'info':
      return (
        <Badge variant="outline" className="text-status-normal border-status-normal rounded-sm">
          Info
        </Badge>
      );
  }
};

const AlertsPanel: React.FC<AlertsPanelProps> = ({ alerts, className }) => {
  return (
    <Card className={className}>
      <CardHeader className="py-4 px-6">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">Recent Alerts</CardTitle>
          <Badge variant="outline" className="font-normal">{alerts.length} alerts</Badge>
        </div>
      </CardHeader>
      <CardContent className="px-0 py-0">
        <div className="max-h-[400px] overflow-y-auto">
          {alerts.map((alert) => (
            <div 
              key={alert.id}
              className="px-6 py-3 border-b last:border-b-0 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="pt-0.5">
                  {getSeverityIcon(alert.severity)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-medium">{alert.title}</h4>
                    {getSeverityBadge(alert.severity)}
                  </div>
                  <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{alert.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium">{alert.source}</span>
                      <span className="text-xs text-muted-foreground">{alert.timestamp}</span>
                    </div>
                    {!alert.acknowledged && (
                      <button className="text-xs text-scope-orange hover:text-scope-dark font-medium">
                        Acknowledge
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AlertsPanel;
