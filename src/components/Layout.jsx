import React,{useState} from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {

  const [darkmode, setDarkMode] = useState(false);
  const toggleMode = () => {
    setDarkMode(!darkmode);
  };

  return (
    <div className={darkmode ? "dark flex relative" : "flex relative"}>
      <div className='dark:bg-black/90 w-[400px]'>
        <Sidebar darkMode={darkmode} toggleMode={toggleMode} />
      </div>
      <div className='dark:bg-black/90 w-full' darkmode={darkmode}>{children}</div>
    </div>
  );
};

export default Layout;
