import React from "react";

export default function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition font-medium ${darkMode ? 'bg-[#222] text-white border-[#444]' : 'bg-white text-gray-700 border-gray-300'}`}
      onClick={() => setDarkMode(d => !d)}
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <span>🌙 Dark Mode On</span>
      ) : (
        <span>☀️ Light Mode</span>
      )}
    </button>
  );
}
