import React from "react";
import { useDispatch } from "react-redux";
import { closeNew } from "../redux/new/newActions";

const NewEvent = () => {
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="bg-black/30 h-full w-full absolute top-0 flex justify-center items-center">
      <section className="bg-white new-event">
        <label htmlFor="name">Enter the Task Name</label>
        <br />
        <input type="text" name="name" id="name" onChange={handleOnChange} />
        <div className="flex justify-between">
          <button className="start-btn">Save</button>
          <button className="start-btn" onClick={() => dispatch(closeNew())}>
            Close
          </button>
        </div>
      </section>
    </div>
  );
};

export default NewEvent;
