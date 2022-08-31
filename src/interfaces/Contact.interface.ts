import ID from "../types/Id.type";

export default interface IContact {
  name: string;
  number: string;
  id?: ID;
}
