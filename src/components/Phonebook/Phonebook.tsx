import { useState } from "react";

import NewContactForm from "../NewContactForm";
import Filter from "../Filter";
import ContactsList from "../ContactsList";

import { useGetContactsQuery } from "../../redux/contacts/contacts";
import { filterContactsByName } from "../../shared/functions/filterContactsByName";

const Phonebook: React.FC = () => {
  const [filter, setFilter] = useState("");
  const { data } = useGetContactsQuery(null);

  const filteredContacts = filterContactsByName(filter, data);

  return (
    <section>
      <h1>My Phonebook</h1>

      <NewContactForm />
      <Filter filter={filter} handleChange={setFilter} />
      <ContactsList contacts={filteredContacts} />
    </section>
  );
};

export default Phonebook;
