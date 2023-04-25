import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [darkmode, setDarkMode] = useState(false);
  const toggleMode = () => {
    setDarkMode(!darkmode);
  };

  return (
    <div className={darkmode ? "dark" : ""}>
      <div className=' flex min-h-screen '>
        <div className='dark:bg-black/90 w-[400px]'>
          <Sidebar darkmode={darkmode} toggleMode={toggleMode} />
        </div>
        <div className='dark:bg-black/90 w-full' darkmode={darkmode}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
