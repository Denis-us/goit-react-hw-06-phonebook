import React from "react";
import PropTypes from "prop-types";
import styles from "./PhonebookItem.module.css";

const PhoneListItem = ({ id, name, number, onDeleteList }) => {
  return (
    <li className={styles.list} key={id}>
      <p>{name}:</p>
      <p>{number}</p>
      <button className={styles.button} onClick={() => onDeleteList(id)}>
        Delete
      </button>
    </li>
  );
};

PhoneListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteList: PropTypes.func.isRequired,
};

export default PhoneListItem;
