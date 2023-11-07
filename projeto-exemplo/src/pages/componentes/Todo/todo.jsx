import React, { useState } from "react";
import List from "../list/list";
import Form from "../form/form";
import "./todo.css"

const Todo = () => {
  const [task, setTask] = useState("");
  const [itemsList, setItemsList] = useState([]);
  JSON.parse(localStorage.getItem("tasks")) || [];

  const handleChangeInput = (event) => {
    const inputTask = event.target.value;

    setTask(inputTask);
  };

  const handleAddItemToList = (event) => {
    event.preventDefault();

    if (!task) {
      return;
    }

    setItemsList([...itemsList, task]);
    localStorage.setItem("tasks", JSON.stringify([...itemsList, task]));
    setTask("");
  };

  return (
    <div className="todo-wrapper">
      <h1>ToDo List</h1>
      <Form
      handleAddItemToList={handleAddItemToList}
      handleChangeInput={handleChangeInput}
      task={task}
      />

      <List itemsList={itemsList} />
    </div>
  );
};


export default Todo;