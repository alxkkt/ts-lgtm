import IContact from './Contact.interface';

export default interface IContactsState {
  items: [] | IContact[];
  filter: string;
}
