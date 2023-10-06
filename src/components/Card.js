import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/tasks/tasksActions";

const Card = ({ id, name }) => {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <header className="flex items-center justify-between ">
        <p className="card-heading capitalize">
          {id}
          {name}
        </p>
        <div className="flex items-center">
          <div className="divider"></div>
          <p className="timer">00 : 00 : 00 </p>
          <button className="start-btn ml-16">Start</button>
          <button
            className="delete-btn"
            onClick={() => dispatch(deleteTask(id))}
          >
            X
          </button>
        </div>
      </header>
      <p className="font-bolder my-3 leading-4">History</p>
      <div className="history">
        <p className="text-black/80 mb-3">
          No History Found, Click on the Start button to track the time{" "}
        </p>
      </div>
    </div>
  );
};

export default Card;
