
import React from 'react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface DataPoint {
  name: string;
  [key: string]: string | number;
}

interface LineChartProps {
  title: string;
  data: DataPoint[];
  lines: {
    id: string;
    name: string;
    color: string;
    strokeWidth?: number;
  }[];
  yAxisLabel?: string;
  xAxisLabel?: string;
  height?: number;
  gridLines?: boolean;
  className?: string;
}

const LineChart: React.FC<LineChartProps> = ({
  title,
  data,
  lines,
  yAxisLabel,
  xAxisLabel,
  height = 300,
  gridLines = true,
  className,
}) => {
  return (
    <Card className={className}>
      <CardHeader className="py-4 px-6">
        <CardTitle className="text-base font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="px-2 pb-4">
        <div style={{ width: '100%', height }}>
          <ResponsiveContainer width="100%" height="100%">
            <RechartsLineChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 20,
                bottom: 30,
              }}
            >
              {gridLines && <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />}
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12 }}
                tickLine={{ stroke: '#f0f0f0' }}
                axisLine={{ stroke: '#f0f0f0' }}
                label={{ 
                  value: xAxisLabel, 
                  position: 'insideBottom', 
                  offset: -15,
                  style: { fontSize: 12, fill: '#888' }
                }}
              />
              <YAxis 
                tick={{ fontSize: 12 }} 
                tickLine={{ stroke: '#f0f0f0' }}
                axisLine={{ stroke: '#f0f0f0' }}
                label={{ 
                  value: yAxisLabel, 
                  angle: -90, 
                  position: 'insideLeft',
                  style: { fontSize: 12, fill: '#888' }
                }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  borderRadius: '4px',
                  border: '1px solid #f0f0f0',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                  fontSize: 12,
                }}
              />
              <Legend 
                verticalAlign="bottom" 
                height={36} 
                iconType="circle"
                iconSize={8}
                wrapperStyle={{ fontSize: 12 }}
              />
              {lines.map((line) => (
                <Line
                  key={line.id}
                  type="monotone"
                  dataKey={line.id}
                  name={line.name}
                  stroke={line.color}
                  strokeWidth={line.strokeWidth || 2}
                  dot={{ strokeWidth: 2, r: 4, fill: 'white' }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
              ))}
            </RechartsLineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default LineChart;
