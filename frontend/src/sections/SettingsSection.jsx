import React, { useState } from "react";
import DarkModeToggle from "../DarkModeToggle";
import { useNavigate } from "react-router-dom";

export default function SettingsSection({ darkMode, setDarkMode, setActiveSection }) {
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);
  const handleLogout = () => {
    setShowConfirm(true);
  };
  const confirmLogout = () => {
    setShowConfirm(false);
    setActiveSection('Login');
    navigate('/');
  };
  const cancelLogout = () => {
    setShowConfirm(false);
  };
  return (
    <div className={`flex flex-col md:flex-row items-center justify-between gap-4 px-8 py-6 ${darkMode ? 'bg-gradient-to-r from-[#23232a] to-[#2d2d39]' : 'bg-gradient-to-r from-white to-[#f7f8fa]'} shadow-lg rounded-b-2xl`} style={{boxShadow: darkMode ? '0 4px 24px 0 rgba(30,30,60,0.12)' : '0 4px 24px 0 rgba(81,63,243,0.08)'}}>
      <div className="flex items-center gap-4">
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <button
          className={`px-4 py-2 rounded-lg font-semibold transition ${darkMode ? 'bg-[#513FF3] text-white hover:bg-[#3a2fa3]' : 'bg-[#513FF3] text-white hover:bg-[#3a2fa3]'}`}
          onClick={handleLogout}
        >Log Out</button>
      </div>
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className={`bg-white rounded-xl shadow-lg p-8 flex flex-col items-center min-w-[260px] ${darkMode ? 'bg-[#23232a] text-white' : ''}`}>
            <div className="text-lg font-semibold mb-4">Are you sure you want to log out?</div>
            <div className="flex gap-4">
              <button className="px-4 py-2 rounded-lg font-semibold transition bg-[#513FF3] text-white hover:bg-[#3a2fa3]" onClick={confirmLogout}>Yes, Log Out</button>
              <button className="px-4 py-2 rounded-lg font-semibold transition bg-[#f3f4f6] text-[#513FF3] hover:bg-[#e9eaf3]" onClick={cancelLogout}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
