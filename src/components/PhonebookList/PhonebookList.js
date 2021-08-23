import React from "react";
import { useSelector, useDispatch } from "react-redux";
import deleteItem from "../../redux/actions";
import { getVisibleContacts } from "../../redux/contacts-selector";
import PhoneBookItem from "../PhonebookItem/PhonebookItem";
import styles from "./PhonebookList.module.css";

const PhonebookList = ({ title }) => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteList = (id) => dispatch(deleteItem.deleteItem(id));

  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {contacts.map(({ id, name, number }) => (
          <PhoneBookItem
            className={styles.listEl}
            key={id}
            name={name}
            number={number}
            onDeleteList={() => onDeleteList(id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default PhonebookList;
