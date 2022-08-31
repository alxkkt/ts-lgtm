import React, { memo } from "react";

import styles from "./Filter.module.css";

interface IProps {
  filter: string;
  handleChange: React.Dispatch<React.SetStateAction<string>>;
}

const Filter: React.FC<IProps> = ({ filter = "", handleChange }: IProps) => {
  return (
    <div className={styles.filter}>
      <label htmlFor="filter" className={styles.label}>
        Find contact by name
      </label>
      <input
        type="text"
        defaultValue={filter}
        name="filter"
        className={styles.input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default memo(Filter);
