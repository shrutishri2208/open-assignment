import React from "react";
import Card from "./Card";
import AddButton from "./AddButton";
import { useSelector } from "react-redux";

const Container = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <div className="container">
      {tasks.map((item) => {
        return <Card {...item} />;
      })}
      <AddButton />
    </div>
  );
};

export default Container;
