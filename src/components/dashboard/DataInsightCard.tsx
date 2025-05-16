
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface DataPoint {
  date: string;
  value: number;
}

interface DataInsightCardProps {
  title: string;
  data: DataPoint[];
  currentValue: number;
  percentageChange: number;
  timeframe: string;
  valuePrefix?: string;
  valueSuffix?: string;
}

const DataInsightCard: React.FC<DataInsightCardProps> = ({
  title,
  data,
  currentValue,
  percentageChange,
  timeframe,
  valuePrefix = "",
  valueSuffix = "",
}) => {
  const isPositiveChange = percentageChange >= 0;

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-gray-700">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-baseline">
          <div className="text-2xl font-bold">
            {valuePrefix}
            {currentValue}
            {valueSuffix}
          </div>
          <div
            className={`text-sm font-medium ${
              isPositiveChange ? "text-green-600" : "text-red-600"
            }`}
          >
            {isPositiveChange ? "+" : ""}
            {percentageChange}% <span className="text-gray-500 text-xs">{timeframe}</span>
          </div>
        </div>

        <div className="h-36 mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
              }}
            >
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor={isPositiveChange ? "#10B981" : "#EF4444"}
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor={isPositiveChange ? "#10B981" : "#EF4444"}
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 10 }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis hide={true} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e2e8f0",
                  borderRadius: "0.375rem",
                  fontSize: "0.75rem",
                }}
                formatter={(value) => [`${valuePrefix}${value}${valueSuffix}`, title]}
                labelFormatter={(label) => `Date: ${label}`}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke={isPositiveChange ? "#10B981" : "#EF4444"}
                fillOpacity={1}
                fill="url(#colorValue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataInsightCard;
