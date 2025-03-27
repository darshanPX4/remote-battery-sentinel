
import React from 'react';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

interface BatteryProgressBarProps {
  value: number;
  className?: string;
  indicatorClassName?: string;
}

const BatteryProgressBar: React.FC<BatteryProgressBarProps> = ({
  value,
  className,
  indicatorClassName
}) => {
  // Get the right color based on the value
  const getIndicatorClass = () => {
    if (value <= 20) return 'bg-status-critical';
    if (value <= 40) return 'bg-status-warning';
    return 'bg-status-normal';
  };

  return (
    <div className={cn("w-full", className)}>
      <Progress 
        value={value} 
        className="h-2.5 bg-gray-100"
        // Apply custom styles to the indicator (progress bar fill)
        style={{
          ['--progress-background' as any]: 'transparent',
        }}
      >
        <div 
          className={cn(
            "h-full transition-all", 
            getIndicatorClass(),
            indicatorClassName
          )} 
          style={{ width: `${value}%` }}
        />
      </Progress>
    </div>
  );
};

export default BatteryProgressBar;
