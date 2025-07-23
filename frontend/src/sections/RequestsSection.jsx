import React from "react";
import KpiCards from "../KpiCards";
import Filters from "../Filters";
import { ServicesBarChart, RequestsLineChart, ServiceTypePie } from "../Charts";

export default function RequestsSection({ darkMode, filters, setFilters, filteredBarData, filteredLineData, filteredPieData }) {
  return (
    <div className={`px-8 pt-6 ${darkMode ? 'bg-[#23232a]' : ''}`}> 
      <KpiCards />
      <Filters filters={filters} setFilters={setFilters} />
      <div className="flex flex-col lg:flex-row gap-6 p-8 flex-1">
        <div className={`flex flex-col gap-6 flex-1 min-w-[340px] ${darkMode ? 'bg-[#18181b] rounded-xl p-4' : ''}`}>
          <ServicesBarChart data={filteredBarData} />
        </div>
        <div className={`flex-1 min-w-[340px] ${darkMode ? 'bg-[#18181b] rounded-xl p-4' : ''}`}>
          <RequestsLineChart data={filteredLineData} />
        </div>
        <div className={`flex flex-col gap-6 min-w-[260px] ${darkMode ? 'bg-[#18181b] rounded-xl p-4' : ''}`}>
          <ServiceTypePie data={filteredPieData} />
        </div>
      </div>
    </div>
  );
}
