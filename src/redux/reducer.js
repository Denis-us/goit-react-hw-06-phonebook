import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import types from "./types";

const items = createReducer([], {
  "contact/addContact": (state, action) => [...state, action.payload],
  "contact/delete": (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
