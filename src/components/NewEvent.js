import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeNew } from "../redux/new/newActions";
import { addTask } from "../redux/tasks/tasksActions";
import { newTimer } from "../redux/timer/timerActions";

const NewEvent = () => {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState("");

  const handleOnSave = () => {
    setTaskName("");
    dispatch(closeNew());
    const newTask = {
      id: new Date().getTime(),
      name: taskName,
      history: [],
    };
    dispatch(addTask(newTask));
    dispatch(newTimer(newTask.id));
  };

  return (
    <div className="bg-black/30 h-full w-full absolute top-0 flex justify-center items-center">
      <form className="bg-white new-event">
        <label htmlFor="name">Enter the Task Name</label>
        <br />
        <input
          type="text"
          name="name"
          id="name"
          value={taskName}
          autoFocus
          onChange={(e) => setTaskName(e.target.value)}
        />
        <div className="flex justify-between">
          <button className="start-btn" onClick={handleOnSave} type="submit">
            Save
          </button>
          <button className="start-btn" onClick={() => dispatch(closeNew())}>
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewEvent;
