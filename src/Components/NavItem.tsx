// 2025 design implemented

import { Link } from "react-router-dom";

interface NavItemProps {
  icon?: React.ReactNode;
  text: string;
  highlight?: boolean;
  className?: string;
  to: string;
}

function NavItem({ icon, text, highlight = false, to, className }: NavItemProps) {
  return (
    <Link
      to={to}
      className={`flex items-center space-x-2 text-white hover:text-red-200 transition-all duration-300 hover:scale-105 ${
        highlight ? "bg-red-500/50 rounded-lg px-4 py-2 shadow-md shadow-red-500/50" : ""
      } ${className || ""}`}
      style={{
        textShadow: '0 0 8px rgba(239, 68, 68, 0.6)',
      }}
    >
      {icon && <div className="text-sm">{icon}</div>}
      <span className="text-sm font-medium tracking-wider">{text}</span>
    </Link>
  );
}

export default NavItem;
