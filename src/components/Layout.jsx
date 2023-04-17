import React,{useState} from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {

  const [darkMode, setDarkMode] = useState(true);
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark flex" : "flex"}>
      <div className='dark:bg-black/90 w-[400px]'>
        <Sidebar darkMode={darkMode} toggleMode={toggleMode} />
      </div>
      <div className='dark:bg-black/90 w-full' darkMode={darkMode}>{children}</div>
    </div>
  );
};

export default Layout;
