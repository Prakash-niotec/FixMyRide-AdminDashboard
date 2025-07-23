import React from "react";
import Select from "react-select";

const districtOptions = [
  { value: "all", label: "All Districts" },
  { value: "ampara", label: "Ampara" },
  { value: "anuradhapura", label: "Anuradhapura" },
  { value: "badulla", label: "Badulla" },
  { value: "batticaloa", label: "Batticaloa" },
  { value: "colombo", label: "Colombo" },
  { value: "galle", label: "Galle" },
  { value: "gampaha", label: "Gampaha" },
  { value: "hambantota", label: "Hambantota" },
  { value: "jaffna", label: "Jaffna" },
  { value: "kalutara", label: "Kalutara" },
  { value: "kandy", label: "Kandy" },
  { value: "kegalle", label: "Kegalle" },
  { value: "kilinochchi", label: "Kilinochchi" },
  { value: "kurunegala", label: "Kurunegala" },
  { value: "mannar", label: "Mannar" },
  { value: "matale", label: "Matale" },
  { value: "matara", label: "Matara" },
  { value: "monaragala", label: "Monaragala" },
  { value: "mullaitivu", label: "Mullaitivu" },
  { value: "nuwaraeliya", label: "Nuwara Eliya" },
  { value: "polonnaruwa", label: "Polonnaruwa" },
  { value: "puttalam", label: "Puttalam" },
  { value: "ratnapura", label: "Ratnapura" },
  { value: "trincomalee", label: "Trincomalee" },
  { value: "vavuniya", label: "Vavuniya" },
];
const serviceTypeOptions = [
  { value: "all", label: "All Services" },
  { value: "fuel", label: "Fuel" },
  { value: "garage", label: "Garage" },
  { value: "booking", label: "Booking" },
];
const timeRangeOptions = [
  { value: "7d", label: "Last 7 days" },
  { value: "30d", label: "Last 30 days" },
  { value: "90d", label: "Last 90 days" },
];

export default function Filters({ filters, setFilters }) {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <Select
        className="min-w-[180px]"
        options={districtOptions}
        value={districtOptions.find(o => o.value === filters.district)}
        onChange={opt => setFilters(f => ({ ...f, district: opt.value }))}
        placeholder="District"
      />
      <Select
        className="min-w-[180px]"
        options={serviceTypeOptions}
        value={serviceTypeOptions.find(o => o.value === filters.serviceType)}
        onChange={opt => setFilters(f => ({ ...f, serviceType: opt.value }))}
        placeholder="Service Type"
      />
      <Select
        className="min-w-[180px]"
        options={timeRangeOptions}
        value={timeRangeOptions.find(o => o.value === filters.timeRange)}
        onChange={opt => setFilters(f => ({ ...f, timeRange: opt.value }))}
        placeholder="Time Range"
      />
    </div>
  );
}
