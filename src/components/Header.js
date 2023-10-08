import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const timers = useSelector((state) => state.timers.timers);

  let hours = [];
  let minutes = [];
  let seconds = [];

  timers.forEach((item) => {
    hours.push(item.hours);
    minutes.push(item.minutes);
    seconds.push(item.seconds);
  });

  let totalSeconds = seconds.reduce((acc, cur) => acc + cur, 0) || 0;
  let totalMinutes = minutes.reduce((acc, cur) => acc + cur, 0) || 0;
  let totalHours = hours.reduce((acc, cur) => acc + cur, 0) || 0;

  let totalTime = totalHours * 3600 + totalMinutes * 60 + totalSeconds;

  return (
    <header className="bg-white">
      <div className="header flex items-center justify-between">
        <img
          src="https://open-frontend-bucket.s3.amazonaws.com/interviews/001/logo.svg"
          alt=""
        />
        <p>
          Total Time Spend{" "}
          <span className="font-bolder ml-4">
            {Math.floor(totalTime / 3600)} hr{" "}
            {Math.floor((totalTime % 3600) / 60)} min
          </span>
        </p>
      </div>
    </header>
  );
};

export default Header;
