import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { openNew } from "../redux/new/newActions";

const AddButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      className="add-btn flex justify-center items-center"
      onClick={() => dispatch(openNew())}
    >
      <AddIcon className="scale-125" />
    </button>
  );
};

export default AddButton;
