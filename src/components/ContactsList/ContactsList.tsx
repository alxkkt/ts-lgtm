import Contact from "./Contact";
import IContact from "../../interfaces/Contact.interface";

import styles from "./ContactsList.module.css";

interface IProps {
  contacts: IContact[];
}

const ContactsList = ({ contacts }: IProps) => {
  const elements = contacts.map((contact) => (
    <Contact key={contact.id} item={contact} />
  ));
  return (
    <section className={styles.contacts}>
      <ul className={styles.contactsList}>{elements}</ul>
    </section>
  );
};

export default ContactsList;
