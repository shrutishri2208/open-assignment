import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../redux/tasks/tasksActions";

const Card = ({ id, name, history }) => {
  const [start, setStart] = useState(false);
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const handleStart = () => {
    const today = new Date();
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    let str = Intl.DateTimeFormat("en-GB", options).format(today);
    let startTime = str.split(",").join("");

    history.push({
      start: startTime,
      stop: null,
    });
    setStart(true);
  };

  const handleStop = () => {
    const today = new Date();
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    let str = Intl.DateTimeFormat("en-GB", options).format(today);
    let stopTime = str.split(",").join("");

    setStart(false);
    console.log("STOP: ", stopTime);

    history[history.length - 1].stop = stopTime;
  };

  return (
    <div className="card">
      <header className="flex items-center justify-between ">
        <p className="card-heading capitalize">{name}</p>
        <div className="flex items-center">
          <div className="divider"></div>
          <p className="timer">00 : 00 : 00 </p>
          <button
            className={`${start ? "stop-btn" : "start-btn"} ml-16`}
            onClick={start ? handleStop : handleStart}
          >
            {start ? "Stop" : "Start"}
          </button>
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
        {!history.length && (
          <p className="text-black/80 mb-3">
            No History Found, Click on the Start button to track the time{" "}
          </p>
        )}
        {history
          .slice()
          .reverse()
          .map((item, index) => {
            return (
              <p key={index} style={{ order: -index }}>
                Started the timer at {item.start}
                {item.stop ? ` & stopped at ${item.stop}` : "(Active)"}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default Card;
