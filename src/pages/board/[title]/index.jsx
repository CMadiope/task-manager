import React from "react";
import { useReducer } from "react";
import Topbar from "@/components/Topbar";
import { useRouter } from "next/router";

const Board = () => {
  const router = useRouter();
  const query = router.query;

  // console.log(query.title);

  return (
    <div className='dark:text-white min-h-screen'>
      <Topbar />
    </div>
  );
};

export default Board;
