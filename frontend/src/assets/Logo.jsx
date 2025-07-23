// Show the FixMyRide logo image using standard import for Vite
import logo from "./logo.jpg";

export default function Logo({ className = "w-24 h-24 mx-auto mb-6" }) {
  return (
    <img
      src={logo}
      alt="FixMyRide Logo"
      className={className + " object-contain bg-white"}
      style={{ borderRadius: "20px", boxShadow: "0 2px 16px 0 rgba(0,0,0,0.08)" }}
    />
  );
}
