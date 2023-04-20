import Link from "next/link";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "@/store/taskSlice";
import {
  BsToggleOn,
  BsToggleOff,
  BsMoonFill,
  BsFillSunFill,
  BsTrash,
} from "react-icons/bs";
import { AiOutlineProject } from "react-icons/ai";

const Sidebar = ({ darkmode, toggleMode }) => {
  const tasks = useSelector((state) => state.task.taskList);
  const dispatch = useDispatch();

  // console.log(tasks);

  return (
    <div className='w-full h-full pr-5 border-r bg-white dark:bg-black/30 p-[30px]   relative z-30 '>
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
          <div>
            {tasks?.map((task) => (
              <Link
                key={task.id}
                href='/platform'
                className='py-2 pr-10 pl-2 flex items-center justify-between bg-indigo-600/70 rounded-r-full text-black dark:text-white my-4 w-full'
              >
                <div className='flex gap-2 items-center'>
                  <AiOutlineProject />
                  <p className='capitalize text-xs sm:text-sm'>{task.title}</p>
                </div>
                <button
                  onClick={() => dispatch(removeTask(task.id))}
                  className='cursor-pointer text-red-700 hover:scale-120 '
                >
                  <BsTrash/>
                </button>
              </Link>
            ))}
          </div>
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
