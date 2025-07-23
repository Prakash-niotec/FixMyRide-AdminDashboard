import React from "react";
import UserList from "../UserList";

export default function UsersSection({ darkMode, activeRequestType }) {
  return (
    <div className={`flex-1 flex flex-col items-center justify-center px-8 py-10 ${darkMode ? 'bg-[#23232a] text-white' : ''}`}>
      {activeRequestType === "customers" && <UserList type="customers" />}
      {activeRequestType === "service" && <UserList type="providers" />}
    </div>
  );
}
