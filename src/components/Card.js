import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTask,
  incrementTimer,
  updateStartTime,
  updateStopTime,
} from "../redux/tasks/tasksActions";

const Card = ({ id, name, history }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const taskTimer = tasks.find((item) => item.id === id).timer;
  const taskRunning = tasks.find((item) => item.id === id).running;

  // INCREMENT TIMER EACH SECOND
  useEffect(() => {
    let timerID;
    if (taskRunning) {
      dispatch(incrementTimer(id));
      timerID = setInterval(() => {
        dispatch(incrementTimer(id));
      }, 1000);
    }
    return () => {
      clearInterval(timerID);
    };
  }, [taskRunning, id]);

  // FORMAT START DATE/TIME AND STORE
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
    dispatch(updateStartTime(id, startTime));
  };

  // FORMAT STOP DATE/TIME AND STORE
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
    dispatch(updateStopTime(id, stopTime));
  };

  // STOP ALL TIMERS WHEN USER CLOSES THE WINDOW
  useEffect(() => {
    window.addEventListener("beforeunload", function () {
      console.log("WINDOW IS CLOSING");
      handleStop();
    });
  });

  return (
    <div className="card">
      <header className="flex items-center justify-between ">
        <p className="card-heading text-black/90">
          {name.slice(0, 1).toUpperCase() + name.slice(1)}
        </p>
        <div className="flex items-center">
          <div className="divider"></div>
          <p className="timer">
            {Math.floor(taskTimer / 3600) < 10
              ? `0${Math.floor(taskTimer / 3600)}`
              : Math.floor(taskTimer / 3600)}
            :
            {Math.floor(taskTimer / 60) < 10
              ? `0${Math.floor(taskTimer / 60)}`
              : Math.floor(taskTimer / 60)}
            :{taskTimer % 60 < 10 ? `0${taskTimer % 60}` : taskTimer % 60}
          </p>
          <button
            className={`${taskRunning ? "stop-btn" : "start-btn"} ml-16`}
            onClick={taskRunning ? handleStop : handleStart}
          >
            {taskRunning ? "Stop" : "Start"}
          </button>
          <button
            className="delete-btn"
            onClick={() => {
              dispatch(deleteTask(id));
            }}
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
              <p key={index} className="text-black/80 mb-3">
                Started the timer at {item.start}
                {item.stop ? ` & stopped at ${item.stop}` : " (Active)"}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default Card;
