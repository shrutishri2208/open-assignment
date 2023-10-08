import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTask,
  updateStartTime,
  updateStopTime,
  startTime,
  stopTime,
  updateTimer,
} from "../redux/tasks/tasksActions";
import {
  startTimer,
  stopTimer,
  deleteTimer,
} from "../redux/timer/timerActions";

const Card = ({ id, name, history, running }) => {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks.tasks);
  const timers = useSelector((state) => state.timers.timers);
  const totalTime = tasks.find((item) => item.id === id).totalTime;
  const [timer, setTimer] = useState(totalTime);

  // useEffect(() => {
  //   let timerID;
  //   if (timer.running) {
  //     timerID = setInterval(() => {
  //       dispatch(updateTimer(id));
  //     }, 1000);
  //   }
  //   return () => {
  //     clearInterval(timerID);
  //   };
  // }, [timer.running, id]);

  const handleStart = () => {
    const start = new Date();
    dispatch(startTime(id, start));
  };

  const handleStop = () => {
    const stop = new Date();
    dispatch(stopTime(id, stop));
  };

  // useEffect(() => {
  //   let timerID;
  //   if (running && history.length !== 0) {
  //     let now = new Date();
  //     setTimer(
  //       totalTime + Math.floor((now - history[history.length - 1].start) / 1000)
  //     );
  //     timerID = setInterval(() => {
  //       setTimer((prev) => prev + 1);
  //     }, 1000);
  //   }
  //   // STOPPED IS CLICKED
  //   return () => {
  //     clearInterval(timerID);
  //     console.log("TOTAL TIME: ", timer);
  //     dispatch(updateTimer(id, timer));
  //   };
  // }, [running]);

  useEffect(() => {
    if (history.length !== 0) {
      if (!running) {
        let start = new Date(history[history.length - 1].start);
        console.log("START: ", start);
        let stop = new Date(history[history.length - 1].stop);
        console.log("STOP: ", stop);
        let timer = Math.round((stop - start) / 1000);
        console.log("IS IT:", Math.round((stop - start) / 1000));
        dispatch(updateTimer(id, timer));
      }
    }
  }, [running]);

  console.log(tasks);

  return (
    <div className="card">
      <header className="flex items-center justify-between ">
        <p className="card-heading">
          {name.slice(0, 1).toUpperCase() + name.slice(1)}
        </p>
        <div className="flex items-center">
          <div className="divider"></div>
          <p className="timer">
            {Math.round(totalTime / 3600) < 10
              ? `0${Math.round(totalTime / 3600)}`
              : Math.round(totalTime / 3600)}
            :
            {Math.round(totalTime / 60) < 10
              ? `0${Math.round(totalTime / 60)}`
              : Math.round(totalTime / 60)}
            :{totalTime % 60 < 10 ? `0${totalTime % 60}` : totalTime % 60}
          </p>
          <button
            className={`${running ? "stop-btn" : "start-btn"} ml-16`}
            onClick={running ? handleStop : handleStart}
          >
            {running ? "Stop" : "Start"}
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
        {!history.length ? (
          <p className="text-black/80 mb-3">
            No History Found, Click on the Start button to track the time{" "}
          </p>
        ) : (
          history
            .slice()
            .reverse()
            .map((item, index) => {
              const options = {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
              };
              let startTime;
              if (item.start) {
                startTime = Intl.DateTimeFormat("en-GB", options)
                  .format(new Date(item.start))
                  .split(",")
                  .join("");
              }
              let stopTime;
              if (item.stop) {
                stopTime = Intl.DateTimeFormat("en-GB", options)
                  .format(new Date(item.stop))
                  .split(",")
                  .join("");
              }
              return (
                <p key={index} className="text-black/80 mb-3">
                  Started the timer at {startTime}
                  {stopTime ? ` & stopped at ${stopTime} ` : " (Active)"}
                </p>
              );
            })
        )}
      </div>
    </div>
  );
};

export default Card;
