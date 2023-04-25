import React from "react";
import { useRouter } from "next/router";
import Topbar from "@/components/Topbar";

const Task = () => {
  const router = useRouter();
  const query = router.query;
  // console.log(query);
  return (
    <div className='dark:text-white min-h-screen'>
      <Topbar />
      <div className='pl-[30px] py-5 grid sm:grid-cols-2 md:grid-cols-3 gap-10'>
        <div>
          <div className='flex items-center gap-2'>
            <span className='h-1 w-1 bg-blue-500 rounded-full p-1'></span>
            <p className='text-xs uppercase text-gray-500'>
              Todo <span>(0)</span>
            </p>
          </div>
          <div className='grid gap-4 pt-8 mx-auto px-4'>
            <div className='shadow-xl py-6 px-10 rounded-xl bg-black/30'>
              <h4 className='text-sm'>Build UI for search</h4>
              <p className='text-xs text-gray-500 py-2'>0 of 1 subtasks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
