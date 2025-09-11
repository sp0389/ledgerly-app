import React from "react";

interface HeaderProps {
  label: string;
  description: string;
  icon?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ label, description, icon }) => {
  return (
    <div className="w-full mb-8 rounded-2xl bg-gradient-to-br from-primary/20 via-base-200/60 to-secondary/20 p-8 shadow-xl ring-1 ring-primary/30 flex items-center gap-6">
      {icon && (
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 text-primary text-3xl shadow-md">
          {icon}
        </div>
      )}
      <div className="flex flex-col gap-2 flex-1">
        <h2 className="text-4xl font-black text-primary tracking-tight flex items-center gap-2">
          {label}
        </h2>
        <div className="h-1 w-16 bg-primary/60 rounded-full mb-2"></div>
        <p className="text-lg text-base-content/80">{description}</p>
      </div>
    </div>
  );
};

export default Header;