
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ReportDateFilter({ from, to, setFrom, setTo, onDownload }) {
  // Convert string to Date for DatePicker
  const fromDate = from ? new Date(from) : null;
  const toDate = to ? new Date(to) : null;
  return (
    <div className="flex flex-wrap gap-4 items-end mb-8">
      <div>
        <label className="block text-xs text-gray-500 mb-1">From</label>
        <DatePicker
          selected={fromDate}
          onChange={date => setFrom(date ? date.toISOString().slice(0, 10) : "")}
          selectsStart
          startDate={fromDate}
          endDate={toDate}
          maxDate={toDate}
          dateFormat="yyyy-MM-dd"
          className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#513FF3] w-36"
          placeholderText="Select start date"
        />
      </div>
      <div>
        <label className="block text-xs text-gray-500 mb-1">To</label>
        <DatePicker
          selected={toDate}
          onChange={date => setTo(date ? date.toISOString().slice(0, 10) : "")}
          selectsEnd
          startDate={fromDate}
          endDate={toDate}
          minDate={fromDate}
          dateFormat="yyyy-MM-dd"
          className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#513FF3] w-36"
          placeholderText="Select end date"
        />
      </div>
      <button
        className="ml-2 px-5 py-2 rounded-lg bg-[#513FF3] text-white font-semibold shadow hover:bg-[#3d2fc2] transition"
        onClick={onDownload}
      >
        Download PDF
      </button>
    </div>
  );
}
