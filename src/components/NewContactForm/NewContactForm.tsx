import React, { useState, memo } from "react";
import { nanoid } from "nanoid";

import { usePostContactMutation } from "../../redux/contacts/contacts";

import styles from "./NewContactForm.module.css";

interface IState {
  name: string;
  number: string;
}

const NewContactForm = () => {
  const [state, setState] = useState<IState>({
    name: "",
    number: "",
  });
  const [postContact] = usePostContactMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await postContact({
      ...state,
      id: nanoid(),
    });

    setState({
      name: "",
      number: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { name, number } = state;
  return (
    <div className={styles.container}>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="">Number</label>
        <input
          className={styles.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit" className={styles.formBtn}>
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default memo(NewContactForm);
