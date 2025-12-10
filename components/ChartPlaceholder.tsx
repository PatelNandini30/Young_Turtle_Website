import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Jan', value: 100 },
  { month: 'Feb', value: 102 },
  { month: 'Mar', value: 105 },
  { month: 'Apr', value: 104 },
  { month: 'May', value: 108 },
  { month: 'Jun', value: 112 },
  { month: 'Jul', value: 115 },
  { month: 'Aug', value: 114 },
  { month: 'Sep', value: 118 },
  { month: 'Oct', value: 122 },
  { month: 'Nov', value: 125 },
  { month: 'Dec', value: 130 },
];

const ChartPlaceholder: React.FC = () => {
  return (
    <div className="h-64 w-full bg-neutralDark/50 rounded-xl p-4 border border-white/5">
      <h4 className="text-xs font-semibold text-neutralMuted uppercase mb-4">Hypothetical Growth of $100</h4>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00A89D" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#00A89D" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
          <XAxis dataKey="month" tick={{ fill: '#A7B7C4', fontSize: 10 }} axisLine={false} tickLine={false} />
          <YAxis hide domain={['dataMin - 5', 'dataMax + 5']} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#071A2F', borderColor: '#ffffff20', color: '#fff' }}
            itemStyle={{ color: '#00A89D' }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#00A89D"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorValue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartPlaceholder;