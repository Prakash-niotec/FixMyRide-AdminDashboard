import React from "react";
import ReportDateFilter from "../ReportDateFilter";
import { ServicesBarChart, ServiceTypePie } from "../Charts";

export default function ReportsSection({ darkMode, reportFrom, reportTo, setReportFrom, setReportTo, handleReportDownload, allBarData, allPieData }) {
  return (
    <div className={`px-8 pt-6 ${darkMode ? 'bg-[#23232a]' : ''}`}> 
      <div className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-[#222]'}`}>Admin Panel Report</div>
      <div className={`mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Comprehensive analytics and insights for FixMyRide operations.</div>
      <ReportDateFilter from={reportFrom} to={reportTo} setFrom={setReportFrom} setTo={setReportTo} onDownload={handleReportDownload} />
      <div id="admin-report-section">
        {/* Service Summary */}
        <div className={`rounded-2xl shadow p-6 mb-8 ${darkMode ? 'bg-[#18181b] text-white' : 'bg-white text-black'}`}>
          <div className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-[#222]'}`}>Service Summary</div>
          <div className="flex flex-wrap gap-8">
            <div>
              <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Total Requests</div>
              <div className="text-2xl font-bold">920</div>
            </div>
            <div>
              <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Completed</div>
              <div className="text-2xl font-bold">870</div>
            </div>
            <div>
              <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Pending</div>
              <div className="text-2xl font-bold">50</div>
            </div>
          </div>
        </div>
        {/* Requests by Type */}
        <div className={`rounded-2xl shadow p-6 mb-8 ${darkMode ? 'bg-[#18181b] text-white' : 'bg-white text-black'}`}>
          <div className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-[#222]'}`}>Total Requests by Type</div>
          <ServiceTypePie data={allPieData} />
        </div>
        {/* Completed vs Pending */}
        <div className={`rounded-2xl shadow p-6 mb-8 ${darkMode ? 'bg-[#18181b] text-white' : 'bg-white text-black'}`}>
          <div className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-[#222]'}`}>Completed vs. Pending Requests</div>
          <div className="flex gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#34d399] flex items-center justify-center text-2xl font-bold text-white mb-2">870</div>
              <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Completed</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#f59e42] flex items-center justify-center text-2xl font-bold text-white mb-2">50</div>
              <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Pending</div>
            </div>
          </div>
        </div>
        {/* District-Wise Insights */}
        <div className={`rounded-2xl shadow p-6 mb-8 ${darkMode ? 'bg-[#18181b] text-white' : 'bg-white text-black'}`}>
          <div className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-[#222]'}`}>Requests per District</div>
          <ServicesBarChart data={allBarData.map(d => ({ district: d.district, requests: d.requests }))} />
        </div>
        {/* Top 5 High-Demand Regions */}
        <div className={`rounded-2xl shadow p-6 mb-8 ${darkMode ? 'bg-[#18181b] text-white' : 'bg-white text-black'}`}>
          <div className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-[#222]'}`}>Top 5 High-Demand Regions</div>
          <ol className={`list-decimal ml-6 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
            {allBarData.sort((a,b)=>b.requests-a.requests).slice(0,5).map((d,i)=>(
              <li key={d.district} className="mb-1"><span className="font-bold">{d.district}</span>: {d.requests} requests</li>
            ))}
          </ol>
        </div>
        {/* Revenue Overview */}
        <div className={`rounded-2xl shadow p-6 mb-8 ${darkMode ? 'bg-[#18181b] text-white' : 'bg-white text-black'}`}>
          <div className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-[#222]'}`}>Revenue Overview</div>
          <div className="flex flex-wrap gap-8">
            <div>
              <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Total Earnings</div>
              <div className="text-2xl font-bold">Rs. 1,200,000</div>
            </div>
            <div>
              <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Payments by Method</div>
              <div className="text-base">Card: <span className="font-bold">Rs. 800,000</span></div>
              <div className="text-base">Cash: <span className="font-bold">Rs. 400,000</span></div>
            </div>
            <div>
              <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Outstanding Payments</div>
              <div className="text-2xl font-bold text-[#f59e42]">Rs. 50,000</div>
            </div>
          </div>
        </div>
        {/* Provider Performance */}
        <div className={`rounded-2xl shadow p-6 mb-8 ${darkMode ? 'bg-[#18181b] text-white' : 'bg-white text-black'}`}>
          <div className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-[#222]'}`}>Provider Performance</div>
          <div className="flex flex-wrap gap-8">
            <div>
              <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Requests Handled</div>
              <div className="text-2xl font-bold">120</div>
            </div>
            <div>
              <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Avg. Service Time</div>
              <div className="text-2xl font-bold">22m</div>
            </div>
            <div>
              <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Ratings Summary</div>
              <div className="text-base">4.7/5.0 <span className="text-yellow-400">★</span></div>
            </div>
          </div>
        </div>
        {/* User Activity */}
        <div className={`rounded-2xl shadow p-6 mb-8 ${darkMode ? 'bg-[#18181b] text-white' : 'bg-white text-black'}`}>
          <div className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-[#222]'}`}>User Activity</div>
          <div className="flex flex-wrap gap-8">
            <div>
              <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Active Users (Monthly)</div>
              <div className="text-2xl font-bold">2,100</div>
            </div>
            <div>
              <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>New Registrations</div>
              <div className="text-2xl font-bold">320</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
