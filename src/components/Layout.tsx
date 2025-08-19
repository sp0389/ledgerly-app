import React, { useState, useEffect, type ReactNode } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {

  //TODO: might need to revist how we do this, but this is the functionality we want
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  useEffect(() => {
  }, []);

  return (
    <div className="flex flex-col hscreen">
      <Navbar />
      <div className="flex flex-1">
        {isLoggedIn &&
          <aside className="p-4">
            <Sidebar />
          </aside>
        }
        <div className="flex-1 overflow-auto p-4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;