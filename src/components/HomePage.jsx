import React from "react";

const HomePage = ({ darkMode }) => {
  return (
    <div className={darkMode ? "dark " : ""}>
      <div className="text-black dark:text-white">home</div>
    </div>
  );
};

export default HomePage;
