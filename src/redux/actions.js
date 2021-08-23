import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const addContact = createAction("contact/addContact", (data) => {
  return {
    payload: {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    },
  };
});

const deleteItem = createAction("contact/delete");

const changeFilter = createAction("filter/change");

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteItem, changeFilter };
