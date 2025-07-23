import React from "react";

const kpis = [
  { label: "Total Requests", value: 1240, icon: "📦", color: "bg-[#513FF3]" },
  { label: "Completed Services", value: 1102, icon: "✅", color: "bg-[#34d399]" },
];

export default function KpiCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {kpis.map((kpi) => (
        <div key={kpi.label} className={`flex items-center gap-3 p-4 rounded-xl shadow bg-white`}>
          <div className={`w-10 h-10 flex items-center justify-center rounded-full text-xl text-white ${kpi.color}`}>{kpi.icon}</div>
          <div>
            <div className="text-xs text-gray-500 font-medium">{kpi.label}</div>
            <div className="text-lg font-bold text-gray-800">{kpi.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
