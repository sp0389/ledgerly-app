import React, { type ReactNode } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout: React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <div className="flex flex-col hscreen">
      <Navbar />
      <div className="flex flex-1">
        <aside className="p-4">
          <Sidebar />
        </aside>
        <div className="flex-1 overflow-auto p-4">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout;