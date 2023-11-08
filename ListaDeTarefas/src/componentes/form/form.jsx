import React, { useState } from "react";
import './form.css'

const Form = ({handleChangeInput, handleAddItemToList, task}) => {
  
  return (
      <form onSubmit={handleAddItemToList}>
        <input
          type="text"
          placeholder="Adicione uma tarefa"
          onChange={handleChangeInput}
          value={task}
        />
        <button type="submit">Adicionar</button>
      </form>
  );
};

export default Form;