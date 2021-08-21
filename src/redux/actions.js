import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import types from "./types";

const addContact = createAction(types.ADD_CONTACT, (data) => {
  return {
    payload: {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    },
  };
});

const deleteItem = createAction(types.DELETE_ITEM);

const changeFilter = createAction(types.CHANGE_FILTER);

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteItem, changeFilter };
