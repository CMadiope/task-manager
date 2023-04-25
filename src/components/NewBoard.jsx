import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBoard } from "@/store/boardSlice";
import { v4 as uuidv4 } from "uuid";

const NewBoard = ({ toggleModal }) => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const addNewBoard = () => {
    dispatch(addBoard({ id: uuidv4(), title }));
    toggleModal();
  };

  return (
    <div className='text-black dark:text-white text-xs'>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type='text'
        placeholder='e.g Marketing Plan'
        className='bg-transparent w-full border rounded-md p-2 outline-none placeholder:text-sm'
      />
      <button
        className='text-xs py-1 rounded-md my-1 w-full bg-green-200 cursor-pointer dark:text-black'
        onClick={addNewBoard}
      >
        Add New Board
      </button>
    </div>
  );
};

export default NewBoard;
