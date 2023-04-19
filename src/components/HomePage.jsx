import React from "react";

const HomePage = ({ darkmode }) => {
  return (
    <div className={darkmode ? "dark " : ""}>
      <div className="text-black dark:text-white">home</div>
    </div>
  );
};

export default HomePage;
