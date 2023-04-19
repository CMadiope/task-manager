import React from "react";

const NewTask = () => {
  return (
    <div className='dark:text-white bg-zinc-500  p-8 rounded-md w-auto'>
      <h4>Add New Task</h4>
      <div className='py-4'>
        <p className='text-sm pb-2'>Title</p>
        <input
          type='text'
          placeholder='e.g Take coffee break'
          className='bg-transparent w-full border rounded-md p-2 outline-none placeholder:text-sm'
        />
      </div>
      <div className='py-4'>
        <p className='text-sm pb-2'>Description</p>
        <textarea
          type='text'
          placeholder="eg It's always good to take a break. This 15 minute break will recharge the batteries a little"
          className='bg-transparent w-full border rounded-md p-4 outline-none placeholder:text-sm '
        />
      </div>
      <div className='py-4'>
        <p className='text-sm pb-2'>Subtasks</p>
        <input
          type='text'
          placeholder='e.g Make coffee '
          className='bg-transparent w-full border rounded-md p-2 outline-none placeholder:text-sm'
        />
        <button className='py-2 text-sm rounded-3xl text-center w-full bg-white text-black my-2 hover:bg-black hover:text-white'>
          + Add New Subtask
        </button>
      </div>
      <div className='py-4'>
        <p className='text-sm pb-2'>Status</p>
        <select className='w-full bg-transparent text-sm outline-none'>
          <option>Todo</option>
          <option>Doing</option>
          <option>Done</option>
        </select>
      </div>
      <button className="text-center text-white bg-indigo-500 w-full py-2 rounded-3xl hover:bg-indigo-400">
        create task
      </button>
    </div>
  );
};

export default NewTask;
