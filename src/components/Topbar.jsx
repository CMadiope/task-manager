import React, { useState } from "react";
import NewTask from "./NewTask";

const Topbar = () => {
  const [showmodal, setShowModal] = useState(true);

  const handleModal = () => {
    setShowModal(!showmodal);
  };

  return (
    <div>
      <div className='p-[30px]  flex justify-between items-center dark:bg-black/30'>
        <h1 className='text-md md:text-xl '>Platform Launch</h1>
        <div className='group'>
          <button
            className='text-xs md:text-sm  px-4 py-2 bg-indigo-600 rounded-full group-hover:bg-indigo-500 flex items-center'
            onClick={handleModal}
          >
            <span className='max-sm:text-base dark:text-white'>+</span>
            <p className='hidden sm:block'>Add New Task</p>
          </button>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 z-40 mx-auto py-[150px] px-[100px] ss:px-[150px] sm:px-[200px] md:px-[270px] lg:px-[330px] xl:px-[390px]">
        {showmodal && <NewTask/>}
      </div>
    </div>
  );
};

export default Topbar;
