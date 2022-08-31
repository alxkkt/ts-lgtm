import IContact from "../../interfaces/Contact.interface";

export const filterContactsByName = (
  query: string,
  data: IContact[]
): IContact[] => {
  if (!query) {
    return data;
  }

  const searchedName = query.toLowerCase().trim();

  const filteredContacts = data.filter((contact) =>
    contact.name.toLowerCase().includes(searchedName)
  );

  return filteredContacts;
};

export default filterContactsByName;
