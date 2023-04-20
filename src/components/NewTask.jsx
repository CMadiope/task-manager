import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "@/store/taskSlice";
import { v4 as uuidv4 } from "uuid";

const NewTask = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(null);
  const [subtask, setSubtask] = useState("");
  const statusRef = useRef();

  // const addNewTask = () => {
  //   const id = uuidv4();
  //   dispatch(addTask({ id, title, description, status, subtask }));
  // };

  const selectStatus = (e) => {
    const selectedValue = statusRef.current.value;
    setStatus(selectedValue);
  };
  // console.log(taskItems);

  return (
    <div className='text-white bg-zinc-500  p-8 rounded-md '>
      <h4>Add New Task</h4>
      <div className='py-4'>
        <p className='text-sm pb-2'>Title</p>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type='text'
          placeholder='e.g Take coffee break'
          className='bg-transparent w-full border rounded-md p-2 outline-none placeholder:text-sm'
        />
      </div>
      <div className='py-4'>
        <p className='text-sm pb-2'>Description</p>
        <textarea
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="eg It's always good to take a break. This 15 minute break will recharge the batteries a little"
          className='bg-transparent w-full border rounded-md p-4 outline-none placeholder:text-sm '
        />
      </div>
      <div className='py-4'>
        <p className='text-sm pb-2'>Subtasks</p>
        <input
          value={subtask}
          type='text'
          onChange={(e) => setSubtask(e.target.value)}
          placeholder='e.g Make coffee '
          className='bg-transparent w-full border rounded-md p-2 outline-none placeholder:text-sm'
        />
      </div>
      <div className='py-4'>
        <p className='text-sm pb-2'>Status</p>
        <select
          className='w-full bg-transparent text-sm outline-none py-4'
          ref={statusRef}
          onChange={selectStatus}
        >
          <option>Todo</option>
          <option>Doing</option>
          <option>Done</option>
        </select>
      </div>
      <button
        className='text-center text-white bg-indigo-500 w-full py-2 rounded-3xl hover:bg-indigo-400'
        onClick={()=> dispatch(addTask({id:uuid(), title, description, status, subtask}))}
      >
        Create Task
      </button>
    </div>
  );
};

export default NewTask;
