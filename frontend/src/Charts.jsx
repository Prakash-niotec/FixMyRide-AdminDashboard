import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend } from "recharts";

export function ServicesBarChart({ data }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex-1 min-w-[320px]">
      <div className="font-semibold text-gray-700 mb-4">Requests by District</div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data}>
          <XAxis dataKey="district" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="requests" fill="#513FF3" radius={[6,6,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function RequestsLineChart({ data }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex-1 min-w-[320px]">
      <div className="font-semibold text-gray-700 mb-4">Request Trends</div>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="requests" stroke="#513FF3" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

const pieColors = ["#513FF3", "#34d399", "#f59e42"];
function renderCustomizedLabel({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }) {
  const RADIAN = Math.PI / 180;
  // Position label at the center of each slice
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="#222" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central" fontSize={14} fontWeight="bold">
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
}

export function ServiceTypePie({ data }) {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  return (
    <div className="bg-white rounded-xl shadow-md p-4 md:p-8 flex flex-col items-center min-w-[220px] max-w-[420px] w-full">
      <div className="font-semibold text-gray-700 mb-2 text-base md:text-lg">Service Types</div>
      <div className="flex items-center justify-center w-full" style={{height:'auto', minHeight:180}}>
        <ResponsiveContainer width="100%" aspect={1} minWidth={180} minHeight={180}>
          <PieChart style={{margin:0, overflow:'visible'}}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="type"
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={70}
              fill="#8884d8"
              paddingAngle={0}
              label={renderCustomizedLabel}
              labelLine={false}
              isAnimationActive={false}
            >
              {data.map((entry, idx) => (
                <Cell key={`cell-${idx}`} fill={pieColors[idx % pieColors.length]} />
              ))}
            </Pie>
            <Legend verticalAlign="bottom" height={36} iconType="circle"/>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div style={{height:24}}></div>
      <div className="flex flex-wrap justify-center gap-4 mt-2 mb-2 w-full">
        {data.map((entry, idx) => (
          <div key={entry.type} className="flex items-center gap-2">
            <span style={{width:16, height:16, background:pieColors[idx % pieColors.length], borderRadius:'50%', display:'inline-block', border:'2px solid #eee'}}></span>
            <span className="text-xs md:text-sm text-gray-700 font-medium">{entry.type}: <b>{entry.value}</b> ({((entry.value/total)*100).toFixed(1)}%)</span>
          </div>
        ))}
      </div>
    </div>
  );
}
