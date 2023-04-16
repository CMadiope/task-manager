import Link from "next/link";
import React from "react";
import { BsToggleOn, BsToggleOff, BsMoonFill, BsFillSunFill } from "react-icons/bs";
import { AiOutlineProject } from "react-icons/ai";

const Sidebar = ({ darkMode, toggleMode }) => {
  return (
    <main className="max-w-[500px] pr-5 border-r bg-white dark:bg-black/30">
      <Link href='/'>
        <h1 className='font-semibold dark:text-white text-black'>kanban</h1>
      </Link>
      <main className='flex flex-col reletive w-full'>
        <section>
          <span className='text-xs text-gray-500 uppercase font-semibold py-4'>
            all boards (0)
          </span>
          <Link
            href='/'
            className='py-2 pr-10 pl-2 flex items-center gap-2 bg-indigo-600/70 rounded-r-full text-black dark:text-white my-4'
          >
            <AiOutlineProject />
            <p className='capitalize'>Platform Launch</p>
          </Link>
          <Link
            href='/'
            className='py-2 pr-10 pl-2 flex items-center gap-2 bg-indigo-600/70 rounded-r-full text-black dark:text-white my-4'
          >
            <AiOutlineProject />
            <p className='capitalize m'>+create new board</p>
          </Link>
        </section>
        <section className="absolute bottom-0 w-[250px] left-[30px]">
          <div className="flex items-center justify-evenly text-gray-500 bg-black/70 py-4 px-2">
            <BsFillSunFill size={20} />
            <BsToggleOn size={20} className="text-indigo-500"/>
            <BsMoonFill size={20}/>
          </div>
        </section>
      </main>
    </main>
  );
};

export default Sidebar;
