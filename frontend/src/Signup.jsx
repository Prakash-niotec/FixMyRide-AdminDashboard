import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./assets/Logo";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // Simulate successful signup
    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-white">
      <div className="p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col items-center">
        <Logo />
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Admin Sign Up</h2>
        <form className="space-y-5 w-full" autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
              placeholder="admin@email.com"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoComplete="username"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10 text-gray-900"
                placeholder="Password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="new-password"
                style={{paddingRight:'2.5rem'}}
              />
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer select-none flex items-center justify-center"
                onClick={() => setShowPassword(v => !v)}
                tabIndex={0}
                aria-label={showPassword ? "Hide password" : "Show password"}
                role="button"
                style={{height:'24px',width:'24px'}}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12s3.75-7.5 9.75-7.5 9.75 7.5 9.75 7.5-3.75 7.5-9.75 7.5S2.25 12 2.25 12z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500"><path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 002.25 12s3.75 7.5 9.75-7.5 9.75 7.5 9.75 7.5-3.75 7.5-9.75 7.5S2.25 12 2.25 12z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" /></svg>
                )}
              </span>
            </div>
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10 text-gray-900"
                placeholder="Confirm Password"
                required
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                autoComplete="new-password"
                style={{paddingRight:'2.5rem'}}
              />
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer select-none flex items-center justify-center"
                onClick={() => setShowConfirm(v => !v)}
                tabIndex={0}
                aria-label={showConfirm ? "Hide password" : "Show password"}
                role="button"
                style={{height:'24px',width:'24px'}}
              >
                {showConfirm ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12s3.75-7.5 9.75-7.5 9.75 7.5 9.75 7.5-3.75 7.5-9.75 7.5S2.25 12 2.25 12z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500"><path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 002.25 12s3.75 7.5 9.75-7.5 9.75 7.5 9.75 7.5-3.75 7.5-9.75 7.5S2.25 12 2.25 12z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" /></svg>
                )}
              </span>
            </div>
          </div>
          <button type="submit" className="w-full" style={{background:'#513FF3',color:'#fff',borderRadius:'0.5rem',padding:'0.5rem 0',fontWeight:600}}>Sign Up</button>
        </form>
        <p className="mt-4 text-center text-gray-600">Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link></p>
      </div>
    </div>
  );
}
