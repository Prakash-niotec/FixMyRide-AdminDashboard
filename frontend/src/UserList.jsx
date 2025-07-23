import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UserList({ type, darkMode }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios.get(`/api/users?type=${type}`)
      .then(res => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          setUsers(res.data);
        } else {
          // Fallback to mock data if API returns empty
          setUsers(type === "customers" ? [
            { id: 1, name: "Nimal Perera", email: "nimal@example.com", phone: "0771234567", status: "Active" },
            { id: 2, name: "Sunil Fernando", email: "sunil@example.com", phone: "0772345678", status: "Inactive" },
            { id: 3, name: "Dilani Silva", email: "dilani@example.com", phone: "0773456789", status: "Active" },
            { id: 4, name: "Kasun Jayasuriya", email: "kasun.j@example.com", phone: "0774567890", status: "Active" },
            { id: 5, name: "Ruwan Pathirana", email: "ruwan.p@example.com", phone: "0775678901", status: "Inactive" },
            { id: 6, name: "Tharindu Wickrama", email: "tharindu.w@example.com", phone: "0776789012", status: "Active" },
            { id: 7, name: "Ishara Gunasekara", email: "ishara.g@example.com", phone: "0777890123", status: "Active" },
            { id: 8, name: "Chamila Herath", email: "chamila.h@example.com", phone: "0778901234", status: "Inactive" },
            { id: 9, name: "Saman Kumara", email: "saman.k@example.com", phone: "0779012345", status: "Active" },
            { id: 10, name: "Nadeesha Perera", email: "nadeesha.p@example.com", phone: "0770123456", status: "Active" },
            { id: 11, name: "Malith Fernando", email: "malith.f@example.com", phone: "0771111111", status: "Active" },
            { id: 12, name: "Rashmi De Silva", email: "rashmi.d@example.com", phone: "0772222222", status: "Inactive" },
            { id: 13, name: "Pradeep Samarasinghe", email: "pradeep.s@example.com", phone: "0773333333", status: "Active" },
            { id: 14, name: "Harsha Wijesinghe", email: "harsha.w@example.com", phone: "0774444444", status: "Active" },
            { id: 15, name: "Nuwan Jayawardena", email: "nuwan.j@example.com", phone: "0775555555", status: "Inactive" },
            { id: 16, name: "Chathura Senanayake", email: "chathura.s@example.com", phone: "0776666666", status: "Active" },
            { id: 17, name: "Dinesh Abeysekara", email: "dinesh.a@example.com", phone: "0777777777", status: "Active" },
            { id: 18, name: "Suresh Perera", email: "suresh.p@example.com", phone: "0778888888", status: "Inactive" },
            { id: 19, name: "Lakmal Rajapaksha", email: "lakmal.r@example.com", phone: "0779999999", status: "Active" },
            { id: 20, name: "Gayan Dias", email: "gayan.d@example.com", phone: "0770000000", status: "Active" }
          ] : [
            { id: 101, name: "AutoCare Garage", email: "autocare@provider.com", phone: "0711111111", status: "Active" },
            { id: 102, name: "Fuel Express", email: "fuelexpress@provider.com", phone: "0722222222", status: "Active" },
            { id: 103, name: "QuickFix Mechanics", email: "quickfix@provider.com", phone: "0733333333", status: "Inactive" },
            { id: 104, name: "Rapid Repairs", email: "rapidrepairs@provider.com", phone: "0744444444", status: "Active" },
            { id: 105, name: "Lanka Auto", email: "lankaauto@provider.com", phone: "0755555555", status: "Inactive" },
            { id: 106, name: "Express Garage", email: "expressgarage@provider.com", phone: "0766666666", status: "Active" },
            { id: 107, name: "City Fuel", email: "cityfuel@provider.com", phone: "0777777777", status: "Active" },
            { id: 108, name: "Pro Mechanics", email: "promechanics@provider.com", phone: "0788888888", status: "Inactive" },
            { id: 109, name: "Service Hub", email: "servicehub@provider.com", phone: "0799999999", status: "Active" },
            { id: 110, name: "GarageX", email: "garagex@provider.com", phone: "0700000000", status: "Active" },
            { id: 111, name: "Auto Masters", email: "automasters@provider.com", phone: "0712345678", status: "Active" },
            { id: 112, name: "Speedy Garage", email: "speedygarage@provider.com", phone: "0723456789", status: "Inactive" },
            { id: 113, name: "Prime Fuel", email: "primefuel@provider.com", phone: "0734567890", status: "Active" },
            { id: 114, name: "Elite Mechanics", email: "elitemechanics@provider.com", phone: "0745678901", status: "Active" },
            { id: 115, name: "Garage Pro", email: "garagepro@provider.com", phone: "0756789012", status: "Inactive" },
            { id: 116, name: "AutoXpress", email: "autoxpress@provider.com", phone: "0767890123", status: "Active" },
            { id: 117, name: "Fuel Hub", email: "fuelhub@provider.com", phone: "0778901234", status: "Active" },
            { id: 118, name: "City Garage", email: "citygarage@provider.com", phone: "0789012345", status: "Inactive" },
            { id: 119, name: "ServiceX", email: "servicex@provider.com", phone: "0790123456", status: "Active" },
            { id: 120, name: "AutoPro Lanka", email: "autoprolanka@provider.com", phone: "0701234567", status: "Active" }
          ]);
        }
      })
      .catch(() => {
        // Fallback to mock data if API fails
        setUsers(type === "customers" ? [
          { id: 1, name: "Nimal Perera", email: "nimal@example.com", phone: "0771234567", status: "Active" },
          { id: 2, name: "Sunil Fernando", email: "sunil@example.com", phone: "0772345678", status: "Inactive" },
          { id: 3, name: "Dilani Silva", email: "dilani@example.com", phone: "0773456789", status: "Active" }
        ] : [
          { id: 101, name: "AutoCare Garage", email: "autocare@provider.com", phone: "0711111111", status: "Active" },
          { id: 102, name: "Fuel Express", email: "fuelexpress@provider.com", phone: "0722222222", status: "Active" },
          { id: 103, name: "QuickFix Mechanics", email: "quickfix@provider.com", phone: "0733333333", status: "Inactive" }
        ]);
      })
      .finally(() => setLoading(false));
  }, [type]);

  const handleRemove = async (userId) => {
    if (!window.confirm("Are you sure you want to remove this user?")) return;
    try {
      await axios.delete(`/api/users/${userId}`);
      setUsers(users.filter(u => u.id !== userId));
    } catch {
      alert("Failed to remove user.");
    }
  };

  if (loading) return <div className="p-8 text-center text-gray-500">Loading...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;
  // Filter users by search
  const filteredUsers = users.filter(u => {
    const q = search.toLowerCase();
    return (
      u.name.toLowerCase().includes(q) ||
      u.email.toLowerCase().includes(q) ||
      u.phone.toLowerCase().includes(q)
    );
  });
  if (!filteredUsers.length) return <div className="p-8 text-center text-gray-500">No users found.</div>;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mt-6 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-4">
        <div className="text-2xl font-bold tracking-tight text-[#513FF3]">{type === "customers" ? "Customers" : "Service Providers"}</div>
        <div className="flex-1" />
        <input
          type="text"
          className={`border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#513FF3] w-full md:w-64 ${darkMode ? 'bg-[#23232a] text-white border-gray-600 placeholder-gray-400' : 'bg-white text-gray-900 border-gray-300 placeholder-gray-500'}`}
          placeholder="Search by name, email, or phone..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className="text-sm text-gray-400">Total: {filteredUsers.length}</div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow">
          <thead>
            <tr className="bg-gradient-to-r from-[#f7f8fa] to-[#e9eaf3] text-gray-700">
              <th className="py-3 px-4 font-semibold">Name</th>
              <th className="py-3 px-4 font-semibold">Email</th>
              <th className="py-3 px-4 font-semibold">Phone</th>
              <th className="py-3 px-4 font-semibold">Status</th>
              <th className="py-3 px-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id} className="border-b last:border-none transition hover:bg-[#f3f4f6]">
                <td className="py-3 px-4 font-medium text-[#222]">{user.name}</td>
                <td className="py-3 px-4 text-gray-600">{user.email}</td>
                <td className="py-3 px-4 text-gray-600">{user.phone}</td>
                <td className="py-3 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${user.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-500"}`}>{user.status}</span>
                </td>
                <td className="py-3 px-4">
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-full shadow text-sm transition"
                    onClick={() => handleRemove(user.id)}
                    title="Remove user"
                  >Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
