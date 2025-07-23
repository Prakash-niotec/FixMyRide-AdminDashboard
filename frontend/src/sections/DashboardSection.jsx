import React from "react";
import KpiCards from "../KpiCards";
import { ServicesBarChart, RequestsLineChart, ServiceTypePie } from "../Charts";

export default function DashboardSection({ darkMode, allBarData, allLineData, allPieData }) {
  return (
    <div className={`px-8 pt-6 ${darkMode ? 'bg-[#23232a]' : ''}`}> 
      <div className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-[#222]'}`}>Dashboard Overview</div>
      <div className={`mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Quick summary of all critical metrics and recent activity.</div>
      <KpiCards />
      <div className="flex flex-col lg:flex-row gap-6 p-4 items-stretch">
        <div className={`flex-1 min-w-[340px] flex flex-col justify-end ${darkMode ? 'bg-[#18181b] rounded-xl p-4' : ''}`}>
          <ServicesBarChart data={allBarData.map(d => ({ district: d.district, requests: d.requests }))} />
        </div>
        <div className={`flex-1 min-w-[340px] flex flex-col justify-end ${darkMode ? 'bg-[#18181b] rounded-xl p-4' : ''}`}>
          <RequestsLineChart data={allLineData.map(d => ({ date: d.date, requests: d.requests }))} />
        </div>
        <div className={`flex flex-col justify-end min-w-[260px] ${darkMode ? 'bg-[#18181b] rounded-xl p-4' : ''}`} style={{alignSelf:'flex-end'}}>
          <ServiceTypePie data={allPieData} />
        </div>
      </div>
    </div>
  );
}
