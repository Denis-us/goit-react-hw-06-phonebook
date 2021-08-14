// import React, { Component } from "react";
import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import styles from "./ContactForm.module.css";

export default function Input({ onFormSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contactId = useRef(uuidv4());

  const inputValue = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const addContact = (e) => {
    e.preventDefault();

    onFormSubmit({ name: name, number: number, contactId: contactId });
    formReset();
  };

  const formReset = () => {
    setName("");
    setNumber("");
  };

  return (
    <div className={styles.inputContainer}>
      <form className={styles.form} onSubmit={addContact}>
        <label className={styles.formItem}>
          Name{" "}
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={inputValue}
          />
        </label>
        <label className={styles.formItem}>
          Number{" "}
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={inputValue}
          />
        </label>
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    </div>
  );
}

Input.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
