import Link from "next/link";
import React from "react";
import {
  BsToggleOn,
  BsToggleOff,
  BsMoonFill,
  BsFillSunFill,
} from "react-icons/bs";
import { AiOutlineProject } from "react-icons/ai";

const Sidebar = ({ darkmode, toggleMode }) => {
  return (
    <div className='w-full h-full pr-5 border-r bg-white dark:bg-black/30 p-[30px]  min-h-screen relative '>
      <Link href='/'>
        <h1 className='font-semibold text-2xl dark:text-white text-black'>
          kanban
        </h1>
      </Link>
      <main className='  '>
        <div>
          <span className='text-xs text-gray-500 uppercase font-semibold py-4'>
            all boards (0)
          </span>
          <Link
            href='/platform'
            className='py-2 pr-10 pl-2 flex items-center gap-2 bg-indigo-600/70 rounded-r-full text-black dark:text-white my-4'
          >
            <AiOutlineProject />
            <p className='capitalize text-xs sm:text-sm'>Platform Launch</p>
          </Link>
          <Link
            href='/'
            className='py-2 pr-10 pl-2 flex items-center gap-2 bg-indigo-600/70 rounded-r-full text-black dark:text-white my-4'
          >
            <AiOutlineProject />
            <p className='capitalize text-xs sm:text-sm'>+create new board</p>
          </Link>
        </div>
        <div className='w-full absolute bottom-0 left-0'>
          <div className='flex items-end justify-evenly text-gray-500 dark:bg-black/70 py-4 mx-auto'>
            <BsFillSunFill size={20} />
            <div onClick={toggleMode} className='cursor-pointer'>
              {darkmode ? (
                <BsToggleOff className='text-indigo-500' size={20} />
              ) : (
                <BsToggleOn className='text-indigo-500' size={20} />
              )}
            </div>

            <BsMoonFill size={20} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sidebar;
