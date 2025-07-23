
import React, { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import Login from "./Login";
import Logo from "./assets/Logo";
import DashboardSection from "./sections/DashboardSection";
import UsersSection from "./sections/UsersSection";
import RequestsSection from "./sections/RequestsSection";
import ReportsSection from "./sections/ReportsSection";
import SettingsSection from "./sections/SettingsSection";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const sidebarItems = [
  { label: "Dashboard", icon: "🏠" },
  { label: "Users", icon: "👥", sub: [
    { label: "Customers" },
    { label: "Service Providers" }
  ] },
  { label: "Requests", icon: "📝", sub: [
    { label: "Fuel Requests" },
    { label: "Garage Requests" },
    { label: "Booking Requests" }
  ] },
  { label: "Reports", icon: "📊" },
  { label: "Settings", icon: "⚙️" }
];

export default function Dashboard() {
  // Sidebar state
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [activeRequestType, setActiveRequestType] = useState("all");
  const [filters, setFilters] = useState({
    district: "all",
    serviceType: "all",
    timeRange: "7d",
  });
  const [darkMode, setDarkMode] = useState(false);
  // Report date filter state
  const [reportFrom, setReportFrom] = useState("");
  const [reportTo, setReportTo] = useState("");

  //

  // PDF download handler
  const handleReportDownload = async () => {
    const reportEl = document.getElementById("admin-report-section");
    if (!reportEl) return;
    const canvas = await html2canvas(reportEl, { backgroundColor: null, scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pageWidth - 40;
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 20, 20, pdfWidth, pdfHeight, undefined, "FAST");
    pdf.save("FixMyRide-Admin-Report.pdf");
  };

  // Example data (replace with real API data)
  const allBarData = [
    { district: "Colombo", requests: 320, fuel: 120, garage: 100, booking: 100 },
    { district: "Gampaha", requests: 210, fuel: 80, garage: 70, booking: 60 },
    { district: "Kandy", requests: 180, fuel: 60, garage: 60, booking: 60 },
    { district: "Galle", requests: 120, fuel: 40, garage: 40, booking: 40 },
    { district: "Jaffna", requests: 90, fuel: 30, garage: 30, booking: 30 },
    { district: "Matara", requests: 70, fuel: 20, garage: 20, booking: 30 },
    { district: "Kurunegala", requests: 60, fuel: 20, garage: 20, booking: 20 },
  ];
  const allLineData = [
    { date: "Mon", requests: 120, fuel: 40, garage: 40, booking: 40 },
    { date: "Tue", requests: 180, fuel: 60, garage: 60, booking: 60 },
    { date: "Wed", requests: 150, fuel: 50, garage: 50, booking: 50 },
    { date: "Thu", requests: 200, fuel: 70, garage: 70, booking: 60 },
    { date: "Fri", requests: 170, fuel: 60, garage: 60, booking: 50 },
    { date: "Sat", requests: 220, fuel: 80, garage: 70, booking: 70 },
    { date: "Sun", requests: 140, fuel: 40, garage: 50, booking: 50 },
  ];
  const allPieData = [
    { type: "Booking", value: 400 },
    { type: "Fuel", value: 300 },
    { type: "Garage", value: 200 },
  ];
  const allHeatmapData = [
    { district: "Colombo", value: 120 },
    { district: "Gampaha", value: 80 },
    { district: "Kandy", value: 60 },
    { district: "Galle", value: 40 },
    { district: "Jaffna", value: 20 },
    { district: "Matara", value: 10 },
    { district: "Kurunegala", value: 5 },
  ];

  // Filtering logic
  // Fix: Users sidebar should show sub-sections for Customers and Service Providers
  const isCustomersSection = activeSection === "Users" && activeRequestType === "customers";
  const isProvidersSection = activeSection === "Users" && activeRequestType === "service";
  const isRequestSection = activeSection === "Requests";
  const isDashboardSection = activeSection === "Dashboard";
  const isReportSection = activeSection === "Reports";
  const filteredBarData = isRequestSection && activeRequestType !== "all"
    ? allBarData.map(d => ({ district: d.district, requests: d[activeRequestType] }))
    : allBarData.map(d => ({ district: d.district, requests: d.requests }));
  const filteredLineData = isRequestSection && activeRequestType !== "all"
    ? allLineData.map(d => ({ date: d.date, requests: d[activeRequestType] }))
    : allLineData.map(d => ({ date: d.date, requests: d.requests }));
  const filteredPieData = isRequestSection && activeRequestType !== "all"
    ? allPieData.filter(d => d.type.toLowerCase() === activeRequestType)
    : allPieData;
  const filteredHeatmapData = isRequestSection && activeRequestType !== "all"
    ? allHeatmapData.map(d => ({ district: d.district, value: Math.floor(d.value/2) }))
    : allHeatmapData;

  return (
    <div className={`min-h-screen w-screen flex font-[Outfit] ${darkMode ? 'bg-[#18181b] text-white' : 'bg-[#f7f8fa] text-black'}` }>
      {/* Sidebar */}
      <aside className={`w-64 ${darkMode ? 'bg-gradient-to-b from-[#23232a] to-[#18181b]' : 'bg-gradient-to-b from-white to-[#f7f8fa]'} shadow-xl flex flex-col py-8 px-4 min-h-screen rounded-r-3xl fixed left-0 top-0 h-screen z-20`} style={{boxShadow: darkMode ? '4px 0 32px 0 rgba(30,30,60,0.18)' : '4px 0 32px 0 rgba(81,63,243,0.10)'}}>
        <div className="flex flex-col items-center mb-10">
          <Logo className="w-16 h-16 mb-2" />
          <span className="font-bold text-xl tracking-wide text-[#513FF3]">FixMyRide</span>
        </div>
        <nav className="flex-1">
          <ul className="space-y-2">
            {sidebarItems.map((item, idx) => (
              <li key={item.label}>
                <div
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer font-medium text-gray-700 transition ${activeSection === item.label ? 'bg-[#f3f4f6] text-[#513FF3]' : 'hover:bg-[#f3f4f6]'}`}
                  onClick={() => {
                    setActiveSection(item.label);
                    // For Users, default to customers
                    if (item.label === 'Users') setActiveRequestType('customers');
                    else if (item.label === 'Requests') setActiveRequestType('all');
                  }}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                {item.sub && activeSection === item.label && (
                  <ul className="ml-8 mt-1 space-y-1">
                    {item.label === 'Requests' && (
                      <li
                        key="all"
                        className={`text-gray-500 text-sm cursor-pointer transition ${activeRequestType === "all" ? 'text-[#513FF3] font-semibold' : 'hover:text-[#513FF3]'}`}
                        onClick={() => setActiveRequestType("all")}
                      >All Requests</li>
                    )}
                    {item.label === 'Users' && (
                      <>
                        <li
                          key="customers"
                          className={`text-gray-500 text-sm cursor-pointer transition ${activeRequestType === "customers" ? 'text-[#513FF3] font-semibold' : 'hover:text-[#513FF3]'}`}
                          onClick={() => setActiveRequestType("customers")}
                        >Customers</li>
                        <li
                          key="service"
                          className={`text-gray-500 text-sm cursor-pointer transition ${activeRequestType === "service" ? 'text-[#513FF3] font-semibold' : 'hover:text-[#513FF3]'}`}
                          onClick={() => setActiveRequestType("service")}
                        >Service Providers</li>
                      </>
                    )}
                    {item.label === 'Requests' && item.sub.map(sub => {
                      const type = sub.label.toLowerCase().split(" ")[0];
                      return (
                        <li
                          key={sub.label}
                          className={`text-gray-500 text-sm cursor-pointer transition ${activeRequestType === type ? 'text-[#513FF3] font-semibold' : 'hover:text-[#513FF3]'}`}
                          onClick={() => setActiveRequestType(type)}
                        >{sub.label}</li>
                      );
                    })}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen ml-64">
        {/* Top Panel: Show welcome text only on Dashboard, DarkModeToggle only in Settings */}
        {/* Top Panel: Show welcome text only on Dashboard */}
        {isDashboardSection && (
          <div className={`flex flex-col md:flex-row items-center justify-between gap-4 px-8 py-6 ${darkMode ? 'bg-gradient-to-r from-[#23232a] to-[#2d2d39]' : 'bg-gradient-to-r from-white to-[#f7f8fa]'} shadow-lg rounded-b-2xl`} style={{boxShadow: darkMode ? '0 4px 24px 0 rgba(30,30,60,0.12)' : '0 4px 24px 0 rgba(81,63,243,0.08)'}}>
            <div className={`text-2xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-[#222]'}`}>Welcome Back, Admin</div>
          </div>
        )}
        {activeSection === 'Settings' && !isDashboardSection && (
          <SettingsSection darkMode={darkMode} setDarkMode={setDarkMode} setActiveSection={setActiveSection} />
        )}
        {activeSection === 'Login' && (
          <div className={`flex-1 flex flex-col items-center justify-center px-8 py-10 ${darkMode ? 'bg-[#23232a] text-white' : ''}`}>
            <Login />
          </div>
        )}
        {isDashboardSection && (
          <DashboardSection darkMode={darkMode} allBarData={allBarData} allLineData={allLineData} allPieData={allPieData} />
        )}
        {isCustomersSection || isProvidersSection ? (
          <UsersSection darkMode={darkMode} activeRequestType={activeRequestType} />
        ) : null}
        {isRequestSection && (
          <RequestsSection darkMode={darkMode} filters={filters} setFilters={setFilters} filteredBarData={filteredBarData} filteredLineData={filteredLineData} filteredPieData={filteredPieData} />
        )}
        {isReportSection && (
          <ReportsSection darkMode={darkMode} reportFrom={reportFrom} reportTo={reportTo} setReportFrom={setReportFrom} setReportTo={setReportTo} handleReportDownload={handleReportDownload} allBarData={allBarData} allPieData={allPieData} />
        )}
      </main>
      
    </div>
  );
}
