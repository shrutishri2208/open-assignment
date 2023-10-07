import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, updateTasks } from "../redux/tasks/tasksActions";
import {
  startTimer,
  stopTimer,
  updateTimer,
  deleteTimer,
} from "../redux/timer/timerActions";

const Card = ({ id, name, history }) => {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks.tasks);
  const timers = useSelector((state) => state.timers.timers);

  const timer = timers.find((item) => item.id === id);

  useEffect(() => {
    let timerID;
    if (timer.running) {
      timerID = setInterval(() => {
        dispatch(updateTimer(id));
      }, 100);
    }
    return () => {
      clearInterval(timerID);
    };
  }, [timer.running, id]);

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

    dispatch(startTimer(id));
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

    const taskToModify = tasks.find((item) => item.id === id);
    taskToModify.history[history.length - 1].stop = stopTime;

    dispatch(stopTimer(id));
  };

  return (
    <div className="card">
      <header className="flex items-center justify-between ">
        <p className="card-heading">
          {name.slice(0, 1).toUpperCase() + name.slice(1)}
        </p>
        <div className="flex items-center">
          <div className="divider"></div>
          <p className="timer">
            {timer.hours < 10 ? `0${timer.hours}` : timer.hours} :{" "}
            {timer.minutes < 10 ? `0${timer.minutes}` : timer.minutes} :{" "}
            {timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds}
          </p>
          <button
            className={`${timer.running ? "stop-btn" : "start-btn"} ml-16`}
            onClick={timer.running ? handleStop : handleStart}
          >
            {timer.running ? "Stop" : "Start"}
          </button>
          <button
            className="delete-btn"
            onClick={() => {
              dispatch(deleteTask(id));
              dispatch(deleteTimer(id));
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
              <p key={index}>
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
