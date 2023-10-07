import React from "react";
import Card from "./Card";
import AddButton from "./AddButton";
import { useSelector } from "react-redux";

const Container = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <div className="container">
      {tasks.map((item, index) => {
        return <Card {...item} key={index} />;
      })}
      <AddButton />
    </div>
  );
};

export default Container;
