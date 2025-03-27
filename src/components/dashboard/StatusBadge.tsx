
import React from 'react';
import { cn } from '@/lib/utils';

export type StatusType = 'normal' | 'warning' | 'critical' | 'inactive';

interface StatusBadgeProps {
  status: StatusType;
  animate?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
}

const statusConfig = {
  normal: {
    bg: 'bg-status-normal',
    text: 'text-status-normal',
    label: 'Normal',
  },
  warning: {
    bg: 'bg-status-warning',
    text: 'text-status-warning',
    label: 'Warning',
  },
  critical: {
    bg: 'bg-status-critical',
    text: 'text-status-critical',
    label: 'Critical',
  },
  inactive: {
    bg: 'bg-status-inactive',
    text: 'text-status-inactive',
    label: 'Inactive',
  },
};

const sizeConfig = {
  sm: 'h-2 w-2',
  md: 'h-2.5 w-2.5',
  lg: 'h-3 w-3',
};

const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  animate = false,
  size = 'md',
  className,
  label,
}) => {
  const config = statusConfig[status];
  
  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <div className={cn(
        "rounded-full flex-shrink-0", 
        config.bg,
        sizeConfig[size],
        animate && 'animate-pulse-slow'
      )} />
      {label !== undefined ? (
        <span className={cn("text-sm font-medium", config.text)}>
          {label}
        </span>
      ) : (
        <span className="text-sm font-medium">{config.label}</span>
      )}
    </div>
  );
};

export default StatusBadge;
