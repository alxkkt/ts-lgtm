import { memo } from "react";

import IContact from "../../../interfaces/Contact.interface";

import { useDeleteContactMutation } from "../../../redux/contacts/contacts";

import styles from "./Contact.module.css";

interface IProps {
  item: IContact;
}

const Contact = ({ item }: IProps) => {
  const [deleteContact] = useDeleteContactMutation();
  return (
    <li className={styles.contactsListItem}>
      <p>
        {item.name}: {item.number}
      </p>
      <button
        type="button"
        className={styles.deleteBtn}
        onClick={() => deleteContact(item.id!)}
      >
        Delete
      </button>
    </li>
  );
};

export default memo(Contact);
